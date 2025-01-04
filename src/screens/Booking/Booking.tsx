import {
  Box,
  Button,
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

const steps = ["Journey details", "Choose a Car", "Booking Details", "Payment"];

const Booking = () => {
  const theme = useTheme();
  const classes = BookingStyles(theme); 
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStepClick = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Stack
        direction={"column"}
        sx={classes.bgBox}
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
        p={3}
      >
        <Box>
          <Typography sx={classes.experiFont} variant="h6">
            <span>
              <img
                src={whiteStar.src}
                height="20px"
                width="20px"
                style={{ position: "relative", bottom: 35 }}
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
                height="20px"
                width="20px"
                style={{ position: "relative", bottom: 15 }}
              />
            </span>
          </Typography>
        </Box>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <StepLabel
              sx={
                index === activeStep
                  ? { ...classes.addressBox, marginRight: 2, cursor: "pointer" }
                  : { ...classes.pickupBox, marginRight: 2, cursor: "pointer" }
              }
              key={index}
              onClick={() => handleStepClick(index)}
            >
              {label}
            </StepLabel>
          ))}
        </Stepper>
        <Box>
          {activeStep === 0 && <JourneyDetails />}
          {activeStep === 1 && <ChooseACar />}
          {activeStep === 2 && <BookingDetails />}
          {activeStep === 3 && <Payment />}
        </Box>
      </Stack>
    </>
  );
};
export default Booking;
