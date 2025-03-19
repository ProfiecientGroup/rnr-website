import React, { useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
  Grid,
} from "@mui/material";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import BookingStyles from "../BookingStyles";

interface CustomProps {
  handleBack: () => void;
  formData: any;
}

const Payment = (props: CustomProps) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fetchingPrice, setFetchingPrice] = useState(false); // Loader for price fetching

  const selectedCar = props.formData.selectedCar;
  const bookingDetails = props.formData.bookingDetails;

  const carItemStyle = {
    borderColor: theme.palette.primary.main,
    borderRadius: "50px",
    background: "#65573733",
    padding: 4,
    borderStyle: "solid",
    borderWidth: 1,
  };

  const cardStyle = {
    style: {
      base: {
        color: "#00000",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#000",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const fetchClientSecret = async () => {
    setFetchingPrice(true);
    setError(null);
    const amount = selectedCar?.final_price && typeof selectedCar.final_price === "string"
    ? parseFloat(selectedCar.final_price.replace(/[^0-9.]/g, ""))
    : 0;
    try {
      const response = await fetch(
        "http://13.60.40.222:80/create-payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount:  amount
            // amount: 1000,
          }),
        }
      );

      const data = await response.json();
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      } else {
        setError("Failed to get client secret.");
      }
    } catch (err) {
      console.error("Error fetching client secret:", err);
      setError("Error fetching payment details. Try again.");
    } finally {
      setFetchingPrice(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe is not initialized. Please try again.");
      return;
    }

    if (!clientSecret) {
      setError("Please fetch the price first.");
      return;
    }

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setError("Payment method not found. Please refresh the page.");
      setProcessing(false);
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        }
      );

      if (error) {
        setError(error.message || "Payment failed");
      } else {
        alert("Payment successful!");
        // window.location.href = `/booking/confirmation/${paymentIntent?.id}`;
        window.location.href = `/booking`;
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Payment Error:", err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <Box sx={classes.chooseACarBg} mt={3}>
      <Stack direction="column" spacing={4}>
        <Typography
          variant="h2"
          sx={{
            ...classes.experiFont,
            fontSize: "24px !important",
            textAlign: "start",
            lineHeight: "36px",
          }}
        >
          <span style={{ color: theme.palette.primary.main }}>Step 4.</span>{" "}
          Payment Details
        </Typography>
        {selectedCar && (
          <Stack direction="column" spacing={2} sx={carItemStyle}>
            <Stack direction={isLgUp ? "row" : "column"} spacing={2}>
              <img
                src={selectedCar.imgSrc}
                width={isLgUp ? "300px" : "100%"}
                alt={selectedCar.model}
              />
              <Stack direction="column" spacing={2}>
                <Typography>{selectedCar.model}</Typography>
                <Typography>
                  {props.formData.start_datetime
                    ? new Date(props.formData.start_datetime).toDateString()
                    : "Not Selected"}
                </Typography>
                <Typography>
                  {bookingDetails.firstName} {bookingDetails.lastName}
                </Typography>
                <Typography>{bookingDetails.email}</Typography>
                <Typography>{bookingDetails.phone ? bookingDetails.phone : " - "}</Typography>
                <Typography>{selectedCar.final_price ? selectedCar.final_price : " - "}</Typography>
              </Stack>
            </Stack>
          </Stack>
        )}

        <Stack direction={"row"} spacing={2}>
          {/* Back Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: theme.palette.primary.darkest,
              border: `1px solid ${theme.palette.primary.contrastText}`,
              color: "#fff",
              width: "100%",
              borderRadius: "100px",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: theme.palette.primary.darkest,
              },
            }}
            onClick={() => props.handleBack()}
          >
            <Typography variant="body2">Back To Booking Details</Typography>
          </Button>

          {/* Fetch Prices Button */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.contrastText,
              color: "#fff",
              width: "100%",
              borderRadius: "100px",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: theme.palette.primary.contrastText,
              },
            }}
            disabled={fetchingPrice}
            onClick={fetchClientSecret}
          >
            {fetchingPrice ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <Typography variant="body2">Pay Now</Typography>
            )}
          </Button>
        </Stack>

        {/* Show Stripe Card Element Only If Client Secret is Set */}
        {clientSecret && !fetchingPrice && (
          <form
            onSubmit={handleSubmit}
            style={{ marginTop: "20px", width: "100%" }}
          >
            {/* <CardElement options={{ hidePostalCode: true }} /> */}
            <Grid
              container
              sx={{ padding: "1%" }}
            >
              <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
                <Typography
                  sx={{
                    fontSize: 1,
                    color: "#131313",
                  }}
                >
                  Card Number
                </Typography>
                <Box
                  sx={{
                    marginTop: "10px",
                    border: "#dad3dd solid 1px",
                    borderRadius: "9px",
                    padding: "12px",
                    backgroundColor: "#fff",
                  }}
                >
                  <CardElement options={cardStyle} />
                </Box>
              </Grid>
            </Grid>
            {error && (
              <Typography color="error" sx={{ marginTop: 1 }}>
                {error}
              </Typography>
            )}

            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.contrastText,
                color: "#fff",
                width: "100%",
                borderRadius: "100px",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: theme.palette.primary.contrastText,
                },
                marginTop: 2,
              }}
              disabled={!stripe || processing || !clientSecret}
              type="submit"
            >
              {processing ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <Typography variant="body2">Submit</Typography>
              )}
            </Button>
          </form>
        )}
      </Stack>
    </Box>
  );
};

export default Payment;
