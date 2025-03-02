import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
  Button,
  Divider,
} from "@mui/material";
import HomeStyles from "screens/Home/HomeStyles";
import { isTruthy } from "helpers/methods";
import urls from "global/constants/urls";
import viewpaths from "global/constants/viewPathConstants";

interface CarTestimonialData {
  carsImages: any[];
  title: string;
  des: string;
  keyFeatures: { icon: string; name: string }[];
  ratings: { price?: string; title?: string; btn?: boolean }[];
}

interface CustomProps {
  carTestimonialData?: CarTestimonialData[];
}

const CarsTestimonialSection = (props: CustomProps) => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [activeStep, setActiveStep] = useState<number>(0);

  const maxSteps = props.carTestimonialData?.[0]?.carsImages?.length || 0;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const inViewTestimonialData = (carsImages: any[]) => {
    if (isTruthy(carsImages)) {
      const dataToView = carsImages!.length >= 3 ? 3 : carsImages!.length;
      let indices: any[] = [];
      Array.from(Array(dataToView), (_, x) =>
        indices.push((activeStep + x) % carsImages!.length)
      );
      return indices.map((index) => carsImages[index]);
    }
    return [];
  };

  const renderCarImages = (carsImages: any[]) => {
    const data = inViewTestimonialData(carsImages);
    const active = data.length >= 3 ? Math.ceil(data.length / 3) : 0;
    return data.map((step: any, index: number) => {
      const width = index === active ? "700px" : "450px";
      return (
        <Box
          key={index}
          sx={{
            boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.08)",
            borderRadius: "30px",
            textAlign: "center",
            padding: 2,
            opacity: index === active ? 1 : 0.3,
            transition: "opacity 0.3s ease",
          }}
        >
          <Typography>{step.text}</Typography>
          <img
            src={step.img}
            width={isLgUp ? width : "100%"}
            alt={`Car ${index}`}
            style={{ borderRadius: "20px" }}
          />
        </Box>
      );
    });
  };

  const renderKeyFeatures = (features: { icon: string; name: string }[]) => (
    <Stack
      direction="row"
      spacing={isLgUp ? 2 : 0}
      justifyContent={isLgUp ? "space-between" : "center"}
      sx={{ flexWrap: "wrap" }}
    >
      {features.map((feature, index) => (
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent={"center"}
          key={index}
          sx={{
            border: "1px solid #DDB86352",
            width: "270px",
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center",
            margin: "10px",
            backgroundColor: "#1A1A1A",
            maxWidth: "100%",
          }}
        >
          <img src={feature.icon} alt={feature.name} width={24} height={24} />
          <Typography>{feature.name}</Typography>
        </Stack>
      ))}
    </Stack>
  );

  const renderRatings = (
    ratings: { price?: string; title?: string; btn?: boolean }[]
  ) => (
    <Stack
      direction={isLgUp ? "row" : "column"}
      spacing={2}
      justifyContent={isLgUp ? "space-around" : "center"}
      sx={{
        border: "1px solid #DDB86352",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#1A1A1A",
      }}
    >
      {ratings.map((rating, index) => (
        <Stack
          direction={"row"}
          spacing={5}
          key={index}
          justifyContent="center"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack
            direction={"column"}
            spacing={1}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h4" color={theme.palette.primary.main}>
              {rating.price}
            </Typography>
            <Typography variant="body2">{rating.title}</Typography>
            {rating.btn && (
              <Button
                variant="contained"
                href={viewpaths.bookingViewPath}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ width: isLgUp ? "12vw" : "auto", mt: "0px !important" }}
              >
                <Typography variant="button">GET A PRICE & BOOK</Typography>
              </Button>
            )}
          </Stack>

          {isLgUp && index !== ratings.length - 1 && (
            <Divider
              variant="fullWidth"
              orientation="vertical"
              sx={{ borderColor: "#DDB86352" }}
            />
          )}
        </Stack>
      ))}
    </Stack>
  );

  const getDesktopIndicators = (carsImages: any[]) => {
    const indicators = Array.from(
      { length: carsImages?.length || 0 },
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
              onClick={() => handleStepChange(index)}
              key={index}
              sx={{
                width: index === activeStep ? "100px" : "30px",
                height: "5px",
                borderRadius: "2.5px",
                backgroundColor:
                  index === activeStep ? theme.palette.primary.main : "white",
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
    <Box sx={{ width: "100%", padding: "20px 0", overflow: "hidden" }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: 0,
        }}
      >
        <Stack spacing={4} alignItems="center">
          {props.carTestimonialData &&
            props.carTestimonialData.map((data, index) => (
              <Box key={index} sx={{ textAlign: "center" }} pt={2}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: isLgUp ? 5 : 5,
                    paddingBottom: isLgUp ? 10 : 5,
                  }}
                >
                  <Box sx={classes.verticalLine}></Box>
                </Box>
                <Stack
                  direction={{ lg: "row", sm: "column" }}
                  justifyContent="center"
                  alignItems="center"
                  display="flex"
                  spacing={0}
                  sx={{ overflow: "hidden" }}
                >
                  {renderCarImages(data.carsImages)}
                </Stack>
                {getDesktopIndicators(data.carsImages)}
                <Container maxWidth="lg">
                  <Stack
                    direction={{ lg: "column", sm: "column" }}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    spacing={3}
                    mt={4}
                  >
                    <Typography
                      sx={{
                        mt: 2,
                        fontFamily: "kugile",
                        fontWeight: 400,
                        color: theme.palette.primary.main,
                        fontSize: "45px",
                        textAlign: isLgUp ? "start" : "center",
                      }}
                    >
                      {data.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {data.des}
                    </Typography>
                    <Stack direction={"column"} spacing={3} width={"100%"}>
                      <Typography
                        sx={{
                          mt: 2,
                          fontFamily: "kugile",
                          fontWeight: 400,
                          color: theme.palette.primary.main,
                          fontSize: "35px",
                          textAlign: isLgUp ? "start" : "center",
                        }}
                      >
                        Key Features
                      </Typography>
                      {renderKeyFeatures(data.keyFeatures)}
                      {renderRatings(data.ratings)}
                    </Stack>
                  </Stack>
                </Container>
                {/* {index !==
                  (props.carTestimonialData &&
                    props.carTestimonialData?.length - 1) && (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: isLgUp ? 5 : 5,
                      // paddingBottom: isLgUp ? 5 : 5,
                    }}
                  >
                    <Box sx={classes.verticalLine}></Box>
                  </Box>
                )} */}
              </Box>
            ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default CarsTestimonialSection;
