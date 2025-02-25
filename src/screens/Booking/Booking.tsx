import {
  Box,
  Button,
  Grid,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import whiteStar from "../../assets/images/home/whiteStar.png";
import goldStar from "../../assets/images/home/goldStar.png";
import { useState } from "react";
import React from "react";
import BookingStyles from "screens/Booking/BookingStyles";
import JourneyDetails from "./components/JourneyDetails";
import ChooseACar from "./components/ChooseACar";
import BookingDetails from "./components/BookingDetails";
import Payment from "./components/Payment";
import { isPhoneValid } from "helpers/methods";
import moment from "moment";
import { doBooking } from "./components/BookingService";

const steps = ["Journey details", "Booking Details", "Choose a Car", "Payment"];

const Booking = () => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const [currentStep, setCurrentStep] = useState(0);

  const [skipped, setSkipped] = useState(new Set<number>());
  const [tripTypeActiveStep, setTripTypeActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [bookingData, setBookingData] = useState<any>();
  console.log("bookingData", bookingData);

  const [formData, setFormData] = useState({
    pickups: [
      {
        type: "address",
        address: "",
      },
    ],
    dropoffs: [
      {
        type: "address",
        address: "",
      },
    ],
    trip_type:
      tripTypeActiveStep === 0
        ? "one_way"
        : tripTypeActiveStep === 1
        ? "round_trip"
        : "by_hour",
    start_datetime: null,
    end_datetime: null,
    hours: 0,
    bookingDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      noOfPassenger: "",
      noOfSuitcase: "",
      message: "",
    },
  });
  const [journeyDetailsErrors, setJourneyDetailsErrors] = useState<any>({
    trip_type: "",
    start_datetime: "",
    end_datetime: "",
    hours: "",
    pickups: [
      {
        address: "",
      },
    ],
    dropoffs: [
      {
        address: "",
      },
    ],
  });
  const [bookingErrors, setBookingErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    noOfPassenger: "",
    noOfSuitcase: "",
    message: "",
  });

  const BookingDetailsValidate = async (): Promise<boolean> => {
    let newErrors = { ...bookingErrors };
    let isValid = true;

    const {
      firstName,
      lastName,
      email,
      phone,
      noOfPassenger,
      noOfSuitcase,
      message,
    } = formData.bookingDetails;

    if (!firstName) {
      newErrors.firstName = "Please enter first name.";
      isValid = false;
    }
    if (!lastName) {
      newErrors.lastName = "Please enter last name.";
      isValid = false;
    }
    if (!email) {
      newErrors.email = "Please enter email.";
      isValid = false;
    }
    if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
      isValid = false;
    }
    if (!phone || !isPhoneValid(phone)) {
      newErrors.phone = "Please enter a valid phone number.";
      isValid = false;
    }
    if (!noOfPassenger) {
      newErrors.noOfPassenger = "Please select number of passengers.";
      isValid = false;
    }
    if (!noOfSuitcase) {
      newErrors.noOfSuitcase = "Please select number of suitcases.";
      isValid = false;
    }
    if (!message) {
      newErrors.message = "Please enter a message.";
      isValid = false;
    }
    setBookingErrors(newErrors);
    if (isValid) {
      try {
        setIsLoading(true);
        const res = await doBooking(formData);
        setBookingData(res);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
      }
    }

    return isValid;
  };

  const bookingJourneyValidate = () => {
    let newErrors = { ...journeyDetailsErrors };
    let isValid = true;

    // Ensure `newErrors.pickups` and `newErrors.dropoffs` match formData length
    newErrors.pickups = formData.pickups.map(
      (_, index) => newErrors.pickups[index] || { address: "" }
    );

    newErrors.dropoffs = formData.dropoffs.map(
      (_, index) => newErrors.dropoffs[index] || { address: "" }
    );

    // Validate Pickups
    formData.pickups.forEach((pickup, index) => {
      if (!pickup.address) {
        newErrors.pickups[index].address = "Please enter an address.";
        isValid = false;
      } else {
        newErrors.pickups[index].address = "";
      }
    });

    // Validate Dropoffs
    formData.dropoffs.forEach((dropoff, index) => {
      if (!dropoff.address) {
        newErrors.dropoffs[index].address = "Please enter an address.";
        isValid = false;
      } else {
        newErrors.dropoffs[index].address = "";
      }
    });

    // Ensure at least one pickup address is entered
    const isAtLeastOnePickupFilled = formData.pickups.some(
      (pickup) => pickup.address.trim() !== ""
    );
    if (!isAtLeastOnePickupFilled) {
      newErrors.pickups = formData.pickups.map(() => ({
        address: "Please enter at least one pickup address.",
      }));
      isValid = false;
    }

    // Ensure at least one dropoff address is entered
    const isAtLeastOneDropoffFilled = formData.dropoffs.some(
      (dropoff) => dropoff.address.trim() !== ""
    );
    if (!isAtLeastOneDropoffFilled) {
      newErrors.dropoffs = formData.dropoffs.map(() => ({
        address: "Please enter at least one dropoff address.",
      }));
      isValid = false;
    }

    // 🚀 **Trip Type Validation**
    if (tripTypeActiveStep === 0) {
      if (!formData.start_datetime) {
        newErrors.start_datetime = "Start date & time is required.";
        isValid = false;
      } else {
        newErrors.start_datetime = "";
      }
    }

    if (tripTypeActiveStep === 1) {
      if (!formData.start_datetime) {
        newErrors.start_datetime = "Start date & time is required.";
        isValid = false;
      } else {
        newErrors.start_datetime = "";
      }

      if (!formData.end_datetime) {
        newErrors.end_datetime = "End date & time is required.";
        isValid = false;
      } else if (
        moment(formData.end_datetime).isBefore(moment(formData.start_datetime))
      ) {
        newErrors.end_datetime = "End time must be after start time.";
        isValid = false;
      } else {
        newErrors.end_datetime = "";
      }
    }

    if (tripTypeActiveStep === 2) {
      if (!formData.start_datetime) {
        newErrors.start_datetime = "Start date & time is required.";
        isValid = false;
      } else {
        newErrors.start_datetime = "";
      }

      if (!formData.hours || formData.hours <= 0) {
        newErrors.hours = "Please enter valid hours.";
        isValid = false;
      } else {
        newErrors.hours = "";
      }
    }

    setJourneyDetailsErrors(newErrors);
    return isValid;
  };

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleValidationNext = async () => {
    let isValid = false;
    switch (currentStep) {
      case 0:
        isValid = bookingJourneyValidate();
        break;
      case 1:
        isValid = await BookingDetailsValidate();
        break;
      case 2:
        isValid = true;
        break;
      case 3:
        isValid = true;
        break;
      default:
        break;
    }
    if (isValid) {
      setCurrentStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const getBookingSteppers = (step: number) => {
    switch (step) {
      case 0:
        return (
          <JourneyDetails
            handleNext={() => handleValidationNext()}
            formData={formData}
            setFormData={setFormData}
            tripTypeActiveStep={tripTypeActiveStep}
            setTripTypeActiveStep={setTripTypeActiveStep}
            setErrors={setJourneyDetailsErrors}
            errors={journeyDetailsErrors}
          />
        );
      case 1:
        return (
          <BookingDetails
            handleBack={handleBack}
            formData={formData}
            setFormData={setFormData}
            setError={setBookingErrors}
            error={bookingErrors}
            handleNext={() => handleValidationNext()}
            isButtonClicked={isButtonClicked}
            isLoading={isLoading}
            message={message}
            isSuccess={isSuccess}
          />
        );
      case 2:
        return <ChooseACar bookingData={bookingData} />;
      case 3:
        return <Payment />;
      default:
        return null;
    }
  };

  return (
    <>
      <Stack
        direction={"column"}
        sx={classes.bgBox}
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box>
          <Typography sx={classes.experiFont} variant="h6">
            <span>
              <img
                src={whiteStar.src}
                height={lgUp ? "20px" : "13px"}
                width={lgUp ? "20px" : "13px"}
                style={{ position: "relative", bottom: 15 }}
              />
            </span>{" "}
            <span>Book your</span>
          </Typography>
          <Typography sx={classes.experiFont} variant="h6">
            <span style={{ color: theme.palette.primary.main }}>
              Luxurious Journey
            </span>{" "}
            <span>
              <img
                src={goldStar.src}
                height={lgUp ? "20px" : "13px"}
                width={lgUp ? "20px" : "13px"}
                style={{ position: "relative", bottom: 10 }}
              />
            </span>
          </Typography>
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .scrollable::-webkit-scrollbar": {
                width: "5px",
                height: "5px",
                transition: "width 0.3s ease", // Add transition for smooth change
              },
              "& .scrollable:hover::-webkit-scrollbar": {
                width: "10px", // Width when hovering over the parent container
              },
              "& .scrollable::-webkit-scrollbar-track": {
                boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
                borderRadius: "10px",
              },
              "& .scrollable::-webkit-scrollbar-thumb": {
                borderRadius: "10px",
                background: "#000053", // Color for thumb
              },
            }}
          >
            <Box
              sx={{
                [theme.breakpoints.down("md")]: {
                  overflowX: "scroll",
                  padding:1
                },
              }}
            >
              <Stepper activeStep={currentStep}>
                {steps.map((label, index) => (
                  <StepLabel
                    sx={
                      index === currentStep
                        ? {
                            ...classes.addressBox,
                            marginRight: 2,
                            cursor: "pointer",
                          }
                        : {
                            ...classes.pickupBox,
                            marginRight: 2,
                            cursor: "pointer",
                          }
                    }
                    key={index}
                    onClick={() => handleStepClick(index)}
                  >
                    {label}
                  </StepLabel>
                ))}
              </Stepper>
            </Box>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {getBookingSteppers(currentStep)}
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};
export default Booking;
