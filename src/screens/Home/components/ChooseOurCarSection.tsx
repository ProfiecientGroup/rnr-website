import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import carSection from "../../../assets/images/home/carOurServices.png";
import urls from "global/constants/urls";
import HomeStyles from "../HomeStyles";
import TestimonialSection from "./OurPremiumSection";
import car1 from "../../../assets/images/home/car1.svg";
import car2 from "../../../assets/images/home/car2.svg";
import car3 from "../../../assets/images/home/car3.svg";

const testimonial = [
  {
    label: "Carousel 1",
    subTitle: "Advantage Resourcing (Massachusetts, USA)",
    title: "Ms. Oliver",
    img: car1.src,
  },
  {
    label: "Carousel 2",
    subTitle: "Co founder of a startup (San Francisco, USA)",
    title: "N. Milton",
    img: car2.src,
  },
  {
    label: "Carousel 3",
    title: "Jim",
    subTitle: "Director at credit card company, (Virginia, USA)",
    img: car3.src,
  },
  {
    label: "Carousel 4",
    title: "P. Jonas",
    subTitle: "Doctor At Hospital ( PA, USA )",
    img: car1.src,
  },
];

const ChooseOurCarSection = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        ...classes.chooseOurCarBox,
        padding:isLgUp ?   "60px 0" : "30px 0",
      }}
    >
      <Box>
        <TestimonialSection testimonialData={testimonial} />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <Box sx={classes.verticalLine}></Box>
        </Box>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          "&.MuiContainer-root": {
            paddingLeft: 0,
            marginLeft: "inherit",
          },
        }}
      >
        <Stack direction={"column"} spacing={2}>
          <Stack direction={isLgUp ? "row" : "column"} spacing={1}>
            <Stack direction={"column"} spacing={6} sx={{ flex: 1 }}>
              <Stack direction={"row"} spacing={2} justifyContent="flex-end">
                {[
                  {
                    title: "Chauffeurs for any Big Events",
                    description:
                      "Arrive in exceptional style. Our chauffeurs will ensure you and your...",
                  },
                  {
                    title: "Fixed Price single journeys (One Way)",
                    description:
                      "A deeply personal service with lavish attention to detail. All-inclusive prices...",
                  },
                ].map((card, index) => (
                  <Stack
                    direction={"column"}
                    spacing={2}
                    alignItems={"start"}
                    key={index}
                    sx={{
                      padding: "20px",
                      borderRadius: "50px",
                      backgroundColor: theme.palette.primary.darkest,
                      color: "#fff",
                      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
                      maxWidth: "280px",
                      position: "relative",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        padding: "1px", // Thickness of the border
                        borderRadius: "50px",
                        background:
                          "linear-gradient(190.4deg, #DDB863 0%, #030303 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        maskComposite: "exclude",
                      },
                    }}
                  >
                    <Typography variant="caption" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {card.description}
                    </Typography>
                    <Button
                      sx={{
                        color: theme.palette.primary.main,
                        padding: 0,
                      }}
                    >
                      <Typography variant="button">Read More →</Typography>
                    </Button>
                  </Stack>
                ))}
              </Stack>

              <Box
                component="img"
                src={carSection.src}
                alt="Luxury Car"
                sx={{
                  width: "100%",
                  maxWidth: "690px",
                  height: "auto",
                  alignSelf: "center",
                  borderRadius: "12px",
                }}
              />
            </Stack>
            <Stack direction={"column"} spacing={8} sx={{ flex: 1 }}>
              <Stack
                spacing={2}
                alignItems="flex-end"
                justifyContent={"flex-end"}
              >
                <Typography
                  sx={{ ...classes.addressBox, width: isLgUp ? "20%" : "auto" }}
                  variant="caption"
                >
                  Why RNR?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "kugile",
                    fontWeight: 400,
                    fontSize: "42px",
                    textAlign: "end",
                  }}
                >
                  Why choose our Car rental{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Services?
                  </span>
                </Typography>
                <Typography variant="body2">
                  Look at our outstanding car services for you.
                </Typography>
                <Button
                  variant="contained"
                  href={urls.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ width: isLgUp ? "20%" : "auto" }}
                >
                  <Typography variant="button">Know More</Typography>
                </Button>
              </Stack>

              <Stack direction={"row"} spacing={2} justifyContent="flex-end">
                {[
                  {
                    title: "Simple by the hour pricing",
                    description:
                      "Step into a five-star world of luxury. A bespoke service for any occasion...",
                  },
                  {
                    title: "Airport Transfer Prices",
                    description:
                      "Your chauffeur will be waiting in the arrivals hall with your name board...",
                  },
                ].map((card, index) => (
                  <Stack
                    direction={"column"}
                    spacing={2}
                    alignItems={"start"}
                    key={index}
                    sx={{
                      padding: "20px",
                      borderRadius: "50px",
                      backgroundColor: theme.palette.primary.darkest,
                      color: "#fff",
                      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
                      maxWidth: "280px",
                      position: "relative",
                      "&:before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        padding: "1px", // Thickness of the border
                        borderRadius: "50px",
                        background:
                          "linear-gradient(190.4deg, #DDB863 0%, #030303 100%)",
                        WebkitMask:
                          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        maskComposite: "exclude",
                      },
                    }}
                  >
                    <Typography variant="caption" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {card.description}
                    </Typography>
                    <Button
                      sx={{
                        color: theme.palette.primary.main,
                        padding: 0,
                      }}
                    >
                      <Typography variant="button">Read More →</Typography>
                    </Button>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 10,
          }}
        >
          <Box sx={classes.verticalLine}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChooseOurCarSection;
