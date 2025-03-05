import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BookingStyles from "../BookingStyles";
import car1 from "../../../assets/images/booking/car1.svg";

const paymentDetails = [
  { title: "Total", value: "£290.00" },
  { title: "VAT", value: "£30.00" },
  { title: "Payable Amount", value: "£320.00" },
];

interface CustomProps {
  handleBack: Function;
  formData: any;
}

const Payment = (props: CustomProps) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
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
                <Typography>{bookingDetails.phone}</Typography>
              </Stack>
            </Stack>
            <Box
              sx={{
                background: "#DDB863",
                borderTop: "1px solid",
                borderImageSource:
                  "linear-gradient(87.19deg, #030303 4.68%, #DDB863 49.2%, #030303 95.32%)",
              }}
            ></Box>
            <Stack
              direction={isLgUp ? "row" : "column"}
              spacing={1}
              width={"100%"}
              alignItems={isLgUp ? "center" : "start"}
              justifyContent={"space-between"}
            >
              <Box>
                <Typography>Price</Typography>
                <Typography>{selectedCar.final_price}</Typography>
              </Box>
            </Stack>
          </Stack>
        )}
        <Stack direction={"row"} spacing={2}>
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
          >
            <Typography variant="body2">GET MY PRICES</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Payment;
