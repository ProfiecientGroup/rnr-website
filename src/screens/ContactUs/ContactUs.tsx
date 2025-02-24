import React, { useState } from "react";
import {
  Alert,
  AlertColor,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
  InputLabel,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ContactUsStyles from "./ContactUsStyles";
import { isTruthy } from "helpers/methods";
import CustomContactNumberInput from "global/components/CustomContactNumberInput/CustomContactNumberInput";
import { contactUsForm, validateData } from "./ContactUsStateAndValidation";
import formBg from "../../assets/images/contactUs/formBg.webp";
import { title } from "process";
import strings from "global/constants/strings";

const TOP_NAV_HEIGHT = 64;

const contactData = [
  { value: strings.PHONE, title: "Phone number" },
  { value: "Central London", title: "Address" },
  { value: strings.EMAIL, title: "Email Address" },
];

const ContactUs = () => {
  const theme = useTheme();
  const classes = ContactUsStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [formFields, setFormFields] = useState(contactUsForm);
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
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
        const body = {
          firstName: formFields.firstName.value,
          emailId: formFields.email.value,
          contactNo: formFields.phone.value,
          comments: formFields.message.value,
        };
        setFormFields(contactUsForm());
        setOpen(true);
        setIsSuccess(true);
        setChecked(false);
      }
    } catch (error: any) {
      setMessage(error.message);
      setOpen(true);
      setIsSuccess(false);
      setFormFields(contactUsForm());
      setChecked(false);
    } finally {
      setIsLoading(false);
    }
  };

  const getBannerSection = () => (
    <Stack direction="column">
      <Box sx={classes.bgBox}></Box>
      <Box sx={{ backgroundColor: theme.palette.primary.darkest }}>
        <Container
          maxWidth="lg"
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            padding: isLgUp ? "20px 0 85px" : "0 16px",
          }}
        >
          <Stack direction="column" spacing={2}>
            <Typography
              sx={{
                ...classes.experiFont,
                color: theme.palette.primary.main,
              }}
              variant="h6"
            >
              Contact Us
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              Contact us any time. We typically respond within one business day.
              For help upgrading, changing or canceling your RNR account, please
              call the RNR Response Center toll free at +1234567890.
            </Typography>
            <Stack direction={isLgUp ? "row" : "column"} spacing={2} pt={2} >
              <Box
                sx={{
                  border: "1px solid rgba(221, 184, 99, 0.5)",
                  width: { md: "100%", lg: "416px" },
                  // padding: { xs: 3, sm: 4 },
                  backgroundColor: theme.palette.primary.dark,
                  borderRadius: "25px",
                }}
              >
                <Stack
                  spacing={2}
                  height={"100%"}
                  justifyContent={"space-around"}
                  textAlign={"start"}
                >
                  {contactData.map((i: any, index: number) => {
                    return (
                      <Stack
                        spacing={0}
                        alignItems="center"
                        key={index}
                        textAlign={"start"}
                      >
                        <Typography variant="body2" sx={{ color: "#DDB863" }} mt={1}>
                          {i.value}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{ color: theme.palette.text.secondary, mb: 2 }}
                        >
                          {i.title}
                        </Typography>
                        {index !== contactData.length - 1 && ( // Check if it's not the last item
                          <Divider
                            variant="fullWidth"
                            sx={{
                              width: "100%",
                              backgroundColor: "rgba(221, 184, 99, 0.5)",
                              margin: "4px auto",
                              borderColor: theme.palette.primary.main,
                            }}
                          />
                        )}
                      </Stack>
                    );
                  })}
                </Stack>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  backgroundColor: theme.palette.primary.dark,
                  borderRadius: theme.spacing(3),
                  padding: theme.spacing(4),
                  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                  // background: "url(" + formBg.src + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Container maxWidth="md">{getForm()}</Container>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box sx={classes.carImages}></Box>
    </Stack>
  );

  const getForm = () => {
    return (
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <Typography>Write a Message</Typography>
        </Grid>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
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
            error={isTruthy(formFields.firstName.error)}
            helperText={formFields.firstName.error}
            sx={classes.textInputField}
          />
        </Grid>
        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your Email"
            value={formFields.email.value}
            fullWidth
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
            helperText={formFields.email.error}
            sx={classes.textInputField}
          />
        </Grid>
        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
          <CustomContactNumberInput
            label="Phone Number"
            id="phone-number"
            value={formFields.phone.value}
            placeHolder="(999) 999-9999"
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
            error={
              isTruthy(formFields?.phone?.error) && formFields?.phone?.error
            }
            sx={classes.textInputField}
          />
        </Grid>
        <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
          <TextField
            variant="outlined"
            minRows={2}
            multiline
            placeholder="Your Message"
            fullWidth
            value={formFields.message.value}
            error={isTruthy(formFields.message.error)}
            helperText={formFields.message.error}
            onChange={(event) => {
              setFormFields({
                ...formFields,
                message: {
                  value: event.target.value,
                  error: "",
                },
              });
            }}
            sx={{
              ...classes.textInputField,
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    );
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

  return (
    <>
      {getSnackBar()}

      {getBannerSection()}
      {getBackDrop()}
    </>
  );
};

export default ContactUs;
