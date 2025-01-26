import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import { isTruthy } from "helpers/methods";
import HomeStyles from "../HomeStyles";

interface CustomProps {
  testimonialData?: any[];
}

const TestimonialSection = (props: CustomProps) => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [activeStep, setActiveStep] = useState<number>(0);
  const maxSteps: any = props.testimonialData?.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep: any) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep: any) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const inViewTestimonialData = () => {
    if (isTruthy(props.testimonialData)) {
      const dataToView =
        props.testimonialData!.length >= 3 ? 3 : props.testimonialData!.length;
      let indices: any[] = [];
      Array.from(Array(dataToView), (_, x) =>
        indices.push((activeStep + x) % props.testimonialData!.length)
      );
      return indices.map((index) => props.testimonialData![index]);
    }
    return [];
  };

  const getDesktopTestimonialView = () => {
    const data = inViewTestimonialData();

    return data.map((step: any, index: number) => {
      // Define the size and opacity based on the index
      let scale = 1; // Default size for the largest (1st box)
      let opacity = 1; // Default opacity for the largest (1st box)
      let width = "450px";
      let height = "350px";
      if (index === 1) {
        scale = 0.9; // Slightly smaller for the 2nd box
        opacity = 1; // Reduced opacity for the 2nd box
        width = "400px";
        height = "360px";
      } else if (index === 2) {
        scale = 0.8; // Smallest size for the 3rd box
        opacity = 1; // Reduced opacity for the 3rd box
        width = "350px";
        height = "360px";
      }

      return (
        <Box
          key={index}
          sx={{
            borderRadius: "50px",
            backgroundColor:
              index === 0 ? "#65573733" : theme.palette.primary.dark,
            padding: 4,
            width: width,
            height: height,
            transform: `scale(${scale})`,
            opacity: opacity,
            transition: "transform 0.3s ease, opacity 0.3s ease",
            color: "#fff",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
            position: "relative",
            "&:before": {
              content: '""',
              position: "absolute",
              inset: 0,
              padding: "1px", // Thickness of the border
              borderRadius: "50px",
              background:
                index === 0
                  ? " linear-gradient(87.19deg, rgba(221, 184, 99, 0.32) 4.68%, #030303 65.27%, rgba(173, 144, 77, 0.59) 95.32%)"
                  : "none",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            },
          }}
        >
          <Stack direction={"column"} spacing={2}>
            <Typography gutterBottom>{step.title}</Typography>
            <Typography gutterBottom>{step.subTitle}</Typography>
            <img src={step.img} width={"200px"} />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction={"column"} spacing={0}>
                <Typography>Start From</Typography>
                <Typography>£60.00 / Hour</Typography>
              </Stack>
              <Button
                sx={{
                  color: theme.palette.primary.main,
                  padding: 0,
                }}
              >
                <Typography variant="button">Book Now →</Typography>
              </Button>
            </Stack>
          </Stack>
        </Box>
      );
    });
  };

  const getDesktopIndicators = () => {
    const indicators = Array.from(
      { length: props.testimonialData?.length || 0 },
      (_, i) => i
    );

    return (
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          marginTop: "20px",
        }}
      >
        <Stack direction="row" spacing={2}>
          {indicators.map((_, index) => (
            <Box
              onClick={() => handleStepChange(index)} // Bring this card to the first position
              key={index}
              sx={{
                width: index === activeStep ? "100px" : "30px",
                height: "5px",
                borderRadius: "2.5px",
                backgroundColor:
                  index === activeStep ? theme.palette.primary.main : "white", // Active indicator styling
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </Stack>
      </Stack>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ lg: "column", sm: "column" }}
          justifyContent={{
            lg: "center",
            sm: "center",
            xs: "center",
            md: "center",
          }}
          alignItems="center"
          display="flex"
          spacing={1}
          mb={8}
        >
          <Typography
            sx={{ ...classes.addressBox, width: "auto" }}
            variant="caption"
            gutterBottom
          >
           Our Premium
          </Typography>
          <Typography
            sx={{
              fontFamily: "kugile",
              fontWeight: 400,
              fontSize: "40px",
              textAlign: "end",
              marginTop:"20px !important"
            }}
          >
            Take a Look at{" "}
            <span style={{ color: theme.palette.primary.main }}>
              Our Chauffeur Driven Cars
            </span>
          </Typography>
          <Typography variant="body2" >
            Our Chauffeur Driven Cars, Central London Price Guide.{" "}
          </Typography>
        </Stack>
        <Stack
          direction={{ lg: "row", sm: "column" }}
          justifyContent={{
            lg: "center",
            sm: "center",
            xs: "center",
            md: "center",
          }}
          alignItems="center"
          display="flex"
          spacing={2}
        >
          {isLgUp ? getDesktopTestimonialView() : ""}
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          mt={{ xl: 5, lg: 2, md: 1, sm: 0, xs: 0 }}
          justifyContent="center"
        >
          {isLgUp &&
            props.testimonialData!.length >= 3 &&
            getDesktopIndicators()}
        </Stack>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
