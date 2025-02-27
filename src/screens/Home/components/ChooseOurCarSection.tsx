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
import viewpaths from "global/constants/viewPathConstants";

const testimonial = [
  {
    label: "Carousel 1",
    subTitle: "4 Passengers",
    title: "Mercedes S-Class",
    img: car1.src,
    price: "£60.00",
  },
  {
    label: "Carousel 2",
    subTitle: "4 Passengers",
    title: "Mercedes V-Class",
    img: car2.src,
    price: "£50.00",
  },
  {
    label: "Carousel 3",
    title: "Mercedes E-Class",
    subTitle: "4 Passengers",
    img: car3.src,
    price: "£40.00",
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
            paddingTop: isLgUp ? 10 : 5,
            paddingBottom: isLgUp ? 10 : 5,
          }}
        >
          <Box sx={classes.verticalLine}></Box>
        </Box>
      </Box>

      <Container
        maxWidth="xl"
        sx={{
          "&.MuiContainer-root": {
            paddingLeft: isLgUp ? 0 : "none",
            marginLeft: "inherit",
          },
        }}
      >
        <Stack direction={"column"} spacing={2}>
          <Stack direction={isLgUp ? "row" : "column"} spacing={1}>
            <Stack direction={"column"} spacing={6} sx={{ flex: 1 }}>
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={isLgUp ? "flex-end" : "center"}
                sx={{
                  position: "relative",
                  left: isLgUp ? "97px" : 0,
                }}
              >
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
                      padding: "25px",
                      borderRadius: "50px",
                      backgroundColor: theme.palette.primary.dark,
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
                        padding: 0,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          textTransform: "capitalize",
                          color: theme.palette.primary.main,
                        }}
                      >
                        Read More →
                      </Typography>
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
            <Stack direction={"column"} spacing={8} sx={{ flex: 1 }} pt={2}>
              <Stack
                spacing={2}
                alignItems={isLgUp ? "flex-end" : "center"}
                justifyContent={"flex-end"}
              >
                <Typography
                  sx={{ ...classes.addressBox, width: "auto" }}
                  variant="caption"
                >
                  Why RNR?
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "kugile",
                    fontWeight: 400,
                    fontSize: "42px",
                    textAlign: isLgUp ? "end" : "center",
                  }}
                >
                  Why choose our Car {isLgUp ? <br /> : ""} rental{" "}
                  <span style={{ color: theme.palette.primary.main }}>
                    Services
                  </span>
                  ?
                </Typography>
                <Typography variant="body2">
                  Look at our outstanding car services for you.
                </Typography>
                <Button
                  variant="contained"
                  href={viewpaths.bookingViewPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{ width: isLgUp ? "20%" : "auto" }}
                >
                  <Typography variant="button">Know More</Typography>
                </Button>
              </Stack>

              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={isLgUp ? "flex-end" : "center"}
              >
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
                      padding: "25px",
                      borderRadius: "50px",
                      backgroundColor: theme.palette.primary.dark,
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
                        padding: 0,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          textTransform: "capitalize",
                          color: theme.palette.primary.main,
                        }}
                      >
                        Read More →
                      </Typography>
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
            paddingTop: isLgUp ? 10 : 5,
            paddingBottom: isLgUp ? 10 : 5,
          }}
        >
          <Box sx={classes.verticalLine}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChooseOurCarSection;
