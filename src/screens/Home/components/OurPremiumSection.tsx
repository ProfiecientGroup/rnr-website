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
      let scale = 1;
      let opacity = 1;
      let width = isLgUp ? "450px" : "100%";
      let height = isLgUp ? "350px" : "auto";
      if (index === 1) {
        scale = isLgUp ? 0.9 : 1;
        opacity = 1;
        width = isLgUp ? "400px" : "100%";
        height = isLgUp ? "360px" : "auto";
      } else if (index === 2) {
        scale = isLgUp ? 0.8 : 1;
        opacity = 1;
        width = isLgUp ? "350px" : "100%";
        height = isLgUp ? "360px" : "auto";
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
              [theme.breakpoints.down("md")]: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              },
            },
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            height="100%"
            justifyContent={"space-between"}
          >
            <Box>
              <Typography variant="body1">{step.title}</Typography>
              <Typography
                gutterBottom
                variant="body2"
                color={theme.palette.primary.lightest}
              >
                {step.subTitle}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component={"img"}
                src={step.img}
                width={index === 0 ? "250px" : "200px"}
              />
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Stack direction={"column"} spacing={0}>
                <Typography color={theme.palette.primary.lightest}>
                  Start From
                </Typography>
                <Typography>
                  {step.price}{" "}
                  <span
                    style={{
                      color: theme.palette.primary.lightest,
                    }}
                  >
                    / Hour
                  </span>
                </Typography>
              </Stack>
              <Button
                sx={{
                  color: theme.palette.primary.main,
                  cursor: "pointer !important",
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
              textAlign: isLgUp ? "end" : "center",
              marginTop: "20px !important",
            }}
          >
            Take a Look at{" "}
            <span style={{ color: theme.palette.primary.main }}>
              Our Chauffeur Driven Cars
            </span>
          </Typography>
          <Typography variant="body2">
            Our Chauffeur Driven Cars, Central London Price Guide.{" "}
          </Typography>
        </Stack>
        <Stack
          direction={{ lg: "row", sm: "column", xs: "column" }}
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
          {getDesktopTestimonialView()}
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
