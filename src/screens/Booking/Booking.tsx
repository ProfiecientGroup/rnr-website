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
import whiteStar from "../../assets/images/home/whiteStar.webp";
import goldStar from "../../assets/images/home/goldStar.webp";
import { useEffect, useState } from "react";
import React from "react";
import BookingStyles from "screens/Booking/BookingStyles";
import JourneyDetails from "./components/JourneyDetails";
import ChooseACar from "./components/ChooseACar";
import BookingDetails from "./components/BookingDetails";
import Payment from "./components/Payment";
import {
  isPhoneValid,
  openErrorNotification,
  openSuccessNotification,
} from "helpers/methods";
import moment from "moment";
import { doBooking } from "./components/BookingService";
import strings from "global/constants/strings";
import { useRouter } from "next/router";

const steps = ["Journey details", "Choose a Car", "Booking Details", "Payment"];

const Booking = () => {
  const theme = useTheme();
  const router = useRouter();
  const classes = BookingStyles(theme);
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const [currentStep, setCurrentStep] = useState(0);
  const [tripTypeActiveStep, setTripTypeActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [bookingData, setBookingData] = useState<any>();
  const { data }: any = router.query;
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
    selectedCar: null,
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
    // phone: "",
    noOfPassenger: "",
    noOfSuitcase: "",
    // message: "",
  });

  const BookingDetailsValidate = async (): Promise<boolean> => {
    let newErrors = { ...bookingErrors };
    let isValid = true;

    const {
      firstName,
      lastName,
      email,
      // phone,
      noOfPassenger,
      noOfSuitcase,
      // message,
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
    // if (!phone || !isPhoneValid(phone)) {
    //   newErrors.phone = "Please enter a valid phone number.";
    //   isValid = false;
    // }
    if (!noOfPassenger) {
      newErrors.noOfPassenger = "Please select number of passengers.";
      isValid = false;
    }
    if (!noOfSuitcase) {
      newErrors.noOfSuitcase = "Please select number of suitcases.";
      isValid = false;
    }
    // if (!message) {
    //   newErrors.message = "Please enter a message.";
    //   isValid = false;
    // }
    setBookingErrors(newErrors);

    // if (isValid) {
    //   try {
    //     setIsLoading(true);
    //     const response = await fetch(
    //       "http://13.60.40.222/calculate-booking-prices",
    //       {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(formData),
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error("Failed to fetch booking data");
    //     }

    //     const data = await response.json();
    //     setBookingData(data);
    //     setIsLoading(false);
    //   } catch (error: any) {
    //     setIsLoading(false);
    //     openErrorNotification(error.message || "Something went wrong");
    //   }
    // } else {
    //   console.log("Validation failed!", newErrors);
    // }
    return isValid;
  };

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data as string);

        // Ensure proper structure with correct key mapping
        const formattedData = {
          pickups: parsedData?.pickups?.length
            ? parsedData.pickups.map(
                (p: { type: string; address: string }) => ({
                  type: p.type,
                  address: p.address || "", // Ensure `address` exists
                })
              )
            : [{ type: "address", address: "" }], // Default value

          dropoffs: parsedData?.dropoffs?.length
            ? parsedData.dropoffs.map(
                (d: { type: string; address: string }) => ({
                  type: d.type,
                  address: d.address || "", // Ensure `address` exists
                })
              )
            : [{ type: "address", address: "" }], // Default value
        };

        setFormData((prev) => ({
          ...prev,
          ...formattedData,
        }));
      } catch (error) {
        console.error("Error parsing booking data:", error);
      }
    }
  }, [data]);

  const bookingJourneyValidate = async () => {
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
    if (isValid) {
      try {
        setIsLoading(true);
        const response = await fetch(
          "http://13.60.40.222/calculate-booking-prices",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch booking data");
        }

        const data = await response.json();
        setBookingData(data);
        setIsLoading(false);
      } catch (error: any) {
        setIsLoading(false);
        openErrorNotification(error.message || "Something went wrong");
      }
    } else {
      console.log("Validation failed!", newErrors);
    }
    return isValid;
  };

  useEffect(() => {
    if (data) {
      try {
        const parsedData = JSON.parse(data as string);
        setFormData((prev) => ({ ...prev, ...parsedData }));
      } catch (error) {
        console.error("Error parsing booking data:", error);
      }
    }
  }, [data]);

  const handleNext = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleCarSelection = (car: any) => {
    setFormData((prev) => ({ ...prev, selectedCar: car }));
    handleNext();
  };

  const handleValidationNext = async () => {
    let isValid = false;
    switch (currentStep) {
      case 0:
        isValid = await bookingJourneyValidate();
        break;
      case 1:
        isValid = true;
        break;
      case 2:
        isValid = await BookingDetailsValidate();
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
          <ChooseACar
            bookingData={bookingData}
            handleBack={handleBack}
            handleCarSelection={handleCarSelection}
          />
        );
      case 2:
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
      case 3:
        return <Payment handleBack={handleBack} formData={formData} />;
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
        py={lgUp ? 8 : 2}
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
            padding: 2,
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
              py={3}
              sx={{
                [theme.breakpoints.down("md")]: {
                  overflowX: "scroll",
                  padding: 1,
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
                    // onClick={() => handleStepClick(index)}
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
