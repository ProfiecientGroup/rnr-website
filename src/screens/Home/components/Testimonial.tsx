import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { isTruthy } from "helpers/methods";
import { useState } from "react";
import HomeStyles from "../HomeStyles";
import backIcon from "assets/icons/backIcon.svg";
import NextIcon from "assets/icons/NextIcon.svg";
interface CustomProps {
  testimonialData?: any[];
}

const Testimonial = (props: CustomProps) => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const [activeStep, setActiveStep] = useState<number>(0);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const maxSteps: any = props.testimonialData?.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  };

  const getMobileTestimonialView = () => {
    return (
      <>
        {/* <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}
          >
            {props.testimonialData?.map((step, index) => (
              <Box
                key={step.label}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {Math.abs(activeStep - index + 1) <= 1 && (
                  <Box
                    sx={{
                      height: "auto",
                      width: "90vw",
                      overflow: "hidden",
                      backgroundColor: "#F9FCFF",
                      boxShadow: "0px 4px 18px rgba(0, 0, 5, 0.05)",
                      borderRadius: "30px",
                      borderTopLeftRadius: 1,
                      textAlign: "center",
                      padding: 3,
                      [theme.breakpoints.down("lg")]: {
                        height: "auto",
                        width: "267px",
                        padding: "16px",
                      },
                    }}
                  >
                    <Typography gutterBottom sx={classes.imgText}>
                      {step.title}
                    </Typography>
                    <Typography gutterBottom sx={classes.subTitleText}>
                      {step.subTitle}
                    </Typography>
                    <Typography gutterBottom sx={classes.desText}>
                      {step.des}
                    </Typography>
                    <Rating
                      readOnly
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </AutoPlaySwipeableViews> */}
      </>
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
    const active = data.length >= 3 ? Math.ceil(data.length / 3) : 0;
    return data.map((step: any, index: number) => {
      let opacity = 1;
      if (active === 0) {
        opacity = 1;
      } else {
        opacity = index === active ? 0.9 : 0.1;
      }
      return (
        <Box
          sx={{
            borderRadius: "60px",
            margin: "10px",
            background: "#1A1A1A",
            height: "300px",
            width: "605.2px",
            maxHeight: "100%",
            overflow: "hidden",
            textAlign: "center",
            padding: 2,
            opacity: opacity,
            [theme.breakpoints.down("xl")]: {
              width: "378.2px",
              height: "50vh",
              maxHeight: "100%",
            },
            border: "1px solid transparent",
            position: "relative",
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: -1,
              borderRadius: "60px",
              padding: "1px",
              background:
                "linear-gradient(87.19deg, #DDB863 4.68%, #030303 49.2%, #AD904D 95.32%)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            },
          }}
        >
          <Typography gutterBottom>{step.title}</Typography>
          <Typography gutterBottom>{step.subTitle}</Typography>
          <Typography gutterBottom>{step.des}</Typography>
          <Rating
            readOnly
            style={{
              top: "12px",
            }}
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
          />
        </Box>
      );
    });
  };

  const getDesktopIndicators = () => {
    return (
      <Stack direction="row" spacing={2}>
        <Box
          onClick={handleBack}
          sx={{
            cursor: "pointer",
            "&:focus": {
              backgroundColor: "transparent",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
            transition: "all ease 2s",
          }}
        >
          <img
            src={backIcon.src}
            style={{
              height: "auto",
              width: "auto",
            }}
          />
        </Box>
        <Box
          onClick={handleNext}
          sx={{
            cursor: "pointer",
            "&:focus": {
              backgroundColor: "transparent",
            },
            "&:hover": {
              backgroundColor: "transparent",
            },
            transition: "all ease 2s",
          }}
        >
          <img
            src={NextIcon.src}
            style={{
              height: "auto",
              width: "auto",
            }}
          />
        </Box>
      </Stack>
    );
  };

  return (
    <>
      <Container maxWidth="lg" sx={{ pb: 6 }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Box>
            <Typography sx={{ ...classes.addressBox }} variant="caption">
              Testimonial
            </Typography>
            <Typography
              sx={{
                fontFamily: "kugile",
                fontWeight: 400,
                fontSize: "42px",
                pt: 4,
                // textAlign: "end",
              }}
            >
              What our{" "}
              <span style={{ color: theme.palette.primary.main }}>
                client say ?
              </span>
            </Typography>
          </Box>
          <Typography>Our client sent </Typography>
        </Stack>
      </Container>
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
        borderRadius="60px"
      >
        {isDesktop ? getDesktopTestimonialView() : getMobileTestimonialView()}
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        mt={{ xl: 5, lg: 2, md: 1, sm: 0, xs: 0 }}
        justifyContent="center"
      >
        {isDesktop &&
          props.testimonialData!.length >= 3 &&
          getDesktopIndicators()}
      </Stack>
    </>
  );
};
export default Testimonial;
