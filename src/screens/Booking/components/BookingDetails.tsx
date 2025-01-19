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

const BookingDetails = () => {
  const theme = useTheme();
  const classes = BookingStyles(theme);

  const [formFields, setFormFields] = useState({
    firstName: {
      value: "",
      error: "",
    },
    lastName: {
      value: "",
      error: "",
    },
    email: {
      value: "",
      error: "",
    },
    phone: {
      value: "",
      error: "",
    },
    noOfPassenger: {
      value: "",
      error: "",
    },
    noOfSuitcase: {
      value: "",
      error: "",
    },
    message: {
      value: "",
      error: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [checked, setChecked] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const validateData = (formFields: any) => {
    let errors = formFields;
    let isValid = true;
    const email = formFields.email.value;
    const firstName = formFields.firstName.value;
    const lastName = formFields.lastName.value;
    const message = formFields.message.value;
    const phone = formFields.phone.value;
    if (!email && !firstName && !lastName && !message && !phone) {
      errors.firstName.error = "Please enter first name.";
      errors.lastName.error = "Please enter last name.";
      errors.email.error = "Please enter email.";
      errors.phone.error = "Please enter phone number.";
      errors.message.error = "Please enter message.";
      isValid = false;
    }
    if (!firstName) {
      errors.firstName.error = "Please enter first name.";
      isValid = false;
    }
    if (!lastName) {
      errors.lastName.error = "Please enter last name.";
      isValid = false;
    }
    if (!email) {
      errors.email.error = "Please enter email.";
      isValid = false;
    }
    if (!message) {
      errors.message.error = "Please enter message.";
      isValid = false;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errors.email.error = "Please enter valid email.";
      isValid = false;
    }
    if (!isPhoneValid(phone)) {
      errors.phone.error = "Please enter phone number.";
      isValid = false;
    }
    return { isValid, errors };
  };

  const validateFormData = () => {
    const { isValid, errors } = validateData(formFields);
    setFormFields({ ...errors });

    return isValid;
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      if (validateFormData()) {
        // const token = await recaptchaRef?.current?.executeAsync();
        const body = {
          firstName: formFields.firstName.value,
          lastName: formFields.lastName.value,
          emailId: formFields.email.value,
          contactNo: formFields.phone.value,
          comments: formFields.message.value,
          category: "",
          // captchaToken: token,
        };
        // await doContactUs(body);
        // setFormFields(contactUsForm());
        setOpen(true);
        setIsSuccess(true);
        setChecked(false);
      }
    } catch (error: any) {
      setMessage(error.message);
      setOpen(true);
      setIsSuccess(false);
      // setFormFields(contactUsForm());
      setChecked(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getBackDrop = () => {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 101 }}
        open={isLoading}
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
            isSuccess ? ("success" as AlertColor) : ("error" as AlertColor)
          }
          sx={{ width: "100%" }}
        >
          {isSuccess
            ? "Your request has been Submitted!"
            : isTruthy(message)
            ? message
            : "Something went wrong! Please try again."}
        </Alert>
      </Snackbar>
    );
  };

  const getForm = () => {
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your First Name"
            fullWidth
            value={formFields.firstName.value}
            onChange={(event) => {
              setFormFields({
                ...formFields,
                firstName: {
                  value: event.target.value,
                  error: "",
                },
              });
            }}
            sx={classes.textInputField}
            error={isTruthy(formFields.firstName.error)}
            // helperText={formFields.firstName.error}
          />
        </Grid>
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your Last Name"
            fullWidth
            value={formFields.lastName.value}
            sx={classes.textInputField}
            onChange={(event) => {
              setFormFields({
                ...formFields,
                lastName: {
                  value: event.target.value,
                  error: "",
                },
              });
            }}
            error={isTruthy(formFields.lastName.error)}
            // helperText={formFields.lastName.error}
          />
        </Grid>
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your Email"
            value={formFields.email.value}
            fullWidth
            sx={classes.textInputField}
            onChange={(event) => {
              setFormFields({
                ...formFields,
                email: {
                  value: event.target.value,
                  error: "",
                },
              });
            }}
            error={isTruthy(formFields.email.error)}
            // helperText={formFields.email.error}
          />
        </Grid>
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <CustomContactNumberInput
            label="Phone Number"
            id="phone-number"
            value={formFields.phone.value}
            placeHolder="(999) 999-9999"
            sx={classes.textInputField}
            onChange={(value: string) => {
              setFormFields({
                ...formFields,
                phone: {
                  ...formFields.phone,
                  value: value,
                  error: "",
                },
              });
            }}
            fullWidth
            error={isTruthy(formFields.phone.error)}

            // error={
            //   isTruthy(formFields?.phone?.error) && formFields?.phone?.error
            // }
          />
        </Grid>
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <FormControl fullWidth sx={classes.selectInputField}>
            <Select
              placeholder="Select passenger"
              id="noOfPassenger"
              name="noOfPassenger"
              value={formFields.noOfPassenger.value}
              onChange={(event: any) => {
                setFormFields({
                  ...formFields,
                  noOfPassenger: {
                    value: event.target.value,
                    error: "",
                  },
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
              style={{
                color: formFields.noOfPassenger.value === "" ? "#B3B3B3" : "",
                width: "100%",
                background: "transparent",
                borderRadius: "25px",
              }}
              renderValue={
                formFields.noOfPassenger.value !== ""
                  ? () => formFields.noOfPassenger.value
                  : () => "Select passenger"
              }
              displayEmpty
            >
              {noOfPassenger?.map((passenger: any, index: number) => {
                return (
                  <MenuItem
                    sx={classes.optionStyle}
                    value={passenger}
                    key={index}
                  >
                    {passenger}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={6} xl={6} md={12} sm={12} xs={12}>
          <FormControl fullWidth sx={classes.selectInputField}>
            <Select
              placeholder="Select suitcase"
              id="noOfSuitcase"
              name="noOfSuitcase"
              value={formFields.noOfSuitcase.value}
              onChange={(event: any) => {
                setFormFields({
                  ...formFields,
                  noOfSuitcase: {
                    value: event.target.value,
                    error: "",
                  },
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
              style={{
                color: formFields.noOfSuitcase.value === "" ? "#B3B3B3" : "",
                width: "100%",
                background: "transparent",
                borderRadius: "25px",
              }}
              renderValue={
                formFields.noOfSuitcase.value !== ""
                  ? () => formFields.noOfSuitcase.value
                  : () => "Select suitcase"
              }
              displayEmpty
            >
              {noOfSuitcase?.map((suitcase: any, index: number) => {
                return (
                  <MenuItem
                    sx={classes.optionStyle}
                    value={suitcase}
                    key={index}
                  >
                    {suitcase}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            maxRows={5}
            placeholder="Your Message"
            fullWidth
            value={formFields.message.value}
            sx={{
              ...classes.textInputField,
              "&.MuiFormHelperText-root.Mui-error": {
                fontSize: "0.8 rem !important",
              },
            }}
            error={isTruthy(formFields.message.error)}
            // helperText={formFields.message.error}
            onChange={(event) => {
              setFormFields({
                ...formFields,
                message: {
                  value: event.target.value,
                  error: "",
                },
              });
            }}
          />
        </Grid>
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
            >
              <Typography variant="body2">Back To HOME</Typography>
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={handleSubmit}
              // disabled={!checked || isLoading}
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
    <Box sx={classes.journeyDetailsBg}>
      <Stack direction={"column"} spacing={2}>
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
      </Stack>
    </Box>
  );
};

export default BookingDetails;
