import React, { useRef, useState } from "react";
import {
  Alert,
  AlertColor,
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import BookingStyles from "../BookingStyles";
import { isPhoneValid, isTruthy } from "helpers/methods";
import CustomContactNumberInput from "global/components/CustomContactNumberInput/CustomContactNumberInput";

const noOfPassenger = ["1", "2", "3"];
const noOfSuitcase = ["1", "2", "3"];

interface CustomProps {
  handleBack: Function;
  formData: any;
  setFormData: Function;
  error: any;
  setError: Function;
  handleNext: Function;
  isLoading: boolean;
  isSuccess: any;
  message: string;
  isButtonClicked: boolean;
}

const BookingDetails = (props: CustomProps) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const getBackDrop = () => {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 101 }}
        open={props.isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  };

  const getSnackBar = () => {
    return (
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={
            props.isSuccess
              ? ("success" as AlertColor)
              : ("error" as AlertColor)
          }
          sx={{ width: "100%" }}
        >
          {props.isSuccess
            ? "Your request has been Submitted!"
            : isTruthy(props.message)
            ? props.message
            : "Something went wrong! Please try again."}
        </Alert>
      </Snackbar>
    );
  };

  const getForm = () => {
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        {/* First Name */}
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your First Name"
            fullWidth
            value={props.formData.bookingDetails?.firstName || ""}
            onChange={(event) => {
              props.setFormData({
                ...props.formData,
                bookingDetails: {
                  ...props.formData.bookingDetails,
                  firstName: event.target.value,
                },
              });
              props.setError({
                ...props.error,
                firstName: "",
              });
            }}
            sx={classes.textInputField}
            error={
              !isTruthy(props.formData.bookingDetails.firstName) &&
              props.error.firstName
            } // Apply error state
            // helperText={props.error.firstName} // Display error message
          />
        </Grid>

        {/* Last Name */}
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your Last Name"
            fullWidth
            value={props.formData.bookingDetails?.lastName || ""}
            sx={classes.textInputField}
            onChange={(event) => {
              props.setFormData({
                ...props.formData,
                bookingDetails: {
                  ...props.formData.bookingDetails,
                  lastName: event.target.value,
                },
              });
              props.setError({
                ...props.error,
                lastName: "",
              });
            }}
            error={
              !isTruthy(props.formData.bookingDetails.lastName) &&
              props.error.lastName
            }
            // helperText={props.error.lastName} // Display error message
          />
        </Grid>

        {/* Email */}
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your Email"
            value={props.formData.bookingDetails?.email || ""}
            fullWidth
            sx={classes.textInputField}
            onChange={(event) => {
              props.setFormData({
                ...props.formData,
                bookingDetails: {
                  ...props.formData.bookingDetails,
                  email: event.target.value,
                },
              });
              props.setError({
                ...props.error,
                email: "",
              });
            }}
            error={
              !isTruthy(props.formData.bookingDetails.email) &&
              props.error.email
            }

            // helperText={props.error.email} // Display error message
          />
        </Grid>

        {/* Phone Number */}
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <CustomContactNumberInput
            label="Phone Number"
            id="phone-number"
            value={props.formData.bookingDetails?.phone || ""}
            placeHolder="(999) 999-9999"
            sx={classes.textInputField}
            onChange={(value) => {
              props.setFormData({
                ...props.formData,
                bookingDetails: {
                  ...props.formData.bookingDetails,
                  phone: value,
                },
              });
              props.setError({
                ...props.error,
                phone: "",
              });
            }}
            fullWidth
            // error={
            //   !isTruthy(props.formData.bookingDetails.phone) &&
            //   props.error.phone
            // }
            // onError={
            //   !isTruthy(props.formData.bookingDetails.phone) &&
            //   props.error.phone
            // }
            // helperText={
            //   !isTruthy(props.formData.bookingDetails.phone) &&
            //   props.error.phone
            // } // Display error message
          />
        </Grid>

        {/* Number of Passengers */}
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <FormControl fullWidth sx={classes.selectInputField}>
            <Select
              placeholder="Select passenger"
              id="noOfPassenger"
              name="noOfPassenger"
              value={props.formData.bookingDetails?.noOfPassenger || ""}
              onChange={(event) => {
                props.setFormData({
                  ...props.formData,
                  bookingDetails: {
                    ...props.formData.bookingDetails,
                    noOfPassenger: event.target.value,
                  },
                });
                props.setError({
                  ...props.error,
                  noOfPassenger: "",
                });
              }}
              input={<OutlinedInput />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    ...classes.menuItems,
                  },
                },
              }}
              sx={classes.selectMenu}
              renderValue={
                props.formData.bookingDetails?.noOfPassenger !== ""
                  ? () => props.formData.bookingDetails?.noOfPassenger
                  : () => "Select no of passenger"
              }
              displayEmpty
              error={
                !isTruthy(props.formData.bookingDetails.noOfPassenger) &&
                props.error.noOfPassenger
              }
            >
              {noOfPassenger?.map((passenger, index) => (
                <MenuItem
                  sx={classes.optionStyle}
                  value={passenger}
                  key={index}
                >
                  {passenger}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {!isTruthy(props.formData.bookingDetails.noOfPassenger) && (
            <FormHelperText error sx={{ pl: 2 }}>
              {props.error.noOfPassenger}
            </FormHelperText>
          )}
        </Grid>

        {/* Number of Suitcases */}
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <FormControl fullWidth sx={classes.selectInputField}>
            <Select
              placeholder="Select suitcase"
              id="noOfSuitcase"
              name="noOfSuitcase"
              value={props.formData.bookingDetails?.noOfSuitcase || ""}
              onChange={(event) => {
                props.setFormData({
                  ...props.formData,
                  bookingDetails: {
                    ...props.formData.bookingDetails,
                    noOfSuitcase: event.target.value,
                  },
                });
                props.setError({
                  ...props.error,
                  noOfSuitcase: "",
                });
              }}
              input={<OutlinedInput />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    ...classes.menuItems,
                  },
                },
              }}
              sx={classes.selectMenu}
              renderValue={
                props.formData.bookingDetails?.noOfSuitcase !== ""
                  ? () => props.formData.bookingDetails?.noOfSuitcase
                  : () => "Select no of suitcase"
              }
              displayEmpty
              error={
                !isTruthy(props.formData.bookingDetails.noOfSuitcase) &&
                props.error.noOfSuitcase
              } // Apply error state
            >
              {noOfSuitcase?.map((suitcase, index) => (
                <MenuItem sx={classes.optionStyle} value={suitcase} key={index}>
                  {suitcase}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {!isTruthy(props.formData.bookingDetails.noOfSuitcase) && (
            <FormHelperText error sx={{ pl: 2 }}>
              {props.error.noOfSuitcase}
            </FormHelperText>
          )}
        </Grid>

        {/* Message */}
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            minRows={3}
            multiline
            placeholder="Your Message"
            fullWidth
            value={props.formData.bookingDetails?.message || ""}
            sx={{
              ...classes.textInputField,
              "&.MuiFormHelperText-root.Mui-error": {
                fontSize: "0.8rem !important",
              },
            }}
            onChange={(event) => {
              props.setFormData({
                ...props.formData,
                bookingDetails: {
                  ...props.formData.bookingDetails,
                  message: event.target.value,
                },
              });
              props.setError({
                ...props.error,
                message: "",
              });
            }}
            // error={
            //   !isTruthy(props.formData.bookingDetails.message) &&
            //   props.error.message
            // }

            // helperText={props.error.message} // Display error message
          />
        </Grid>

        {/* Buttons */}
        <Grid item md={12} sm={12} xs={12} mt={2}>
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
              <Typography variant="body2">Back To Choose Car</Typography>
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={() => props.handleNext && props.handleNext()}
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
              <Typography variant="body2">GO TO PAYMENTS</Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    );
  };

  return (
    <Box sx={classes.bookingDetailsBg} mt={3}>
      <Typography
        variant="h2"
        sx={{
          ...classes.experiFont,
          fontSize: "24px !important",
          textAlign: "start",
        }}
      >
        <span style={{ color: theme.palette.primary.main }}>Step 3.</span>{" "}
        Booking Details
      </Typography>
      <Container maxWidth="lg">{getForm()}</Container>
      {getSnackBar()}
      {getBackDrop()}
    </Box>
  );
};

export default BookingDetails;
