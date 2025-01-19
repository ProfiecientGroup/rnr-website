import React from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BookingStyles from "../BookingStyles";
import car1 from "../../../assets/images/booking/car1.svg";

const carData = [
  {
    model: "Mercedes S-Class",
    description: ["4 adults", "2 suitcases", "2 carry bags", "WiFi"],
    imgSrc: car1.src,
    extraInfo:
      "First class chauffeur Free 60 mins airport parking & waiting Free 15 mins waiting for other journeys Includes meet & greet Free cancellation within 24 hours",
    price: "£290.00",
  },
  {
    model: "BMW 7 Series",
    description: ["4 adults", "2 suitcases", "2 carry bags", "WiFi"],
    imgSrc: car1.src,
    extraInfo:
      "First class chauffeur Free 60 mins airport parking & waiting Free 15 mins waiting for other journeys Includes meet & greet Free cancellation within 24 hours",
    price: "£350.00",
  },
  {
    model: "Audi A8",
    description: ["4 adults", "2 suitcases", "2 carry bags", "WiFi"],
    imgSrc: car1.src,
    extraInfo:
      "First class chauffeur Free 60 mins airport parking & waiting Free 15 mins waiting for other journeys Includes meet & greet Free cancellation within 24 hours",
    price: "£320.00",
  },
];

const ChooseACar = () => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("xl"));

  const carItemStyle = {
    borderColor: theme.palette.primary.main,
    borderRadius: "50px",
    background: "#65573733",
    padding: 4,
    borderStyle: "solid",
    borderWidth: 1,
  };

  return (
    <Box sx={classes.chooseACarBg}>
      <Stack direction="column" spacing={1}>
        <Typography
          variant="h2"
          sx={{
            ...classes.experiFont,
            fontSize: "24px !important",
            textAlign: "start",
            lineHeight: "36px",
          }}
        >
          <span style={{ color: theme.palette.primary.main }}>Step 2.</span>{" "}
          Available Cars
        </Typography>
        <Typography variant="body2" color={theme.palette.primary.main}>
          3 Cars Available
        </Typography>
        {carData.map(
          ({ model, description, imgSrc, extraInfo, price }, index) => (
            <Stack
              direction={isLgUp ? "row" : "column"}
              spacing={2}
              sx={carItemStyle}
              key={index}
            >
              <Stack direction="column" spacing={2}>
                <Typography>{model}</Typography>
                <Stack direction={isLgUp ? "row" : "column"} spacing={2}>
                  {description.map((item, i) => (
                    <Typography key={i}>
                      {item} {i !== description.length - 1 && "|"}{" "}
                    </Typography>
                  ))}
                </Stack>
                <img
                  src={imgSrc}
                  width={isLgUp ? "400px" : "100%"}
                  alt={model}
                />
              </Stack>
              <Stack direction="column" spacing={2}>
                <Typography>{extraInfo}</Typography>
                <Typography>Your Journey Price</Typography>
                <Typography>{price}</Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    color: "#fff",
                    width: "100%",
                    borderRadius: "100px",
                    textTransform: "uppercase",
                    "&:hover": {
                      backgroundColor: theme.palette.primary.contrastText,
                    },
                  }}
                >
                  <Typography variant="body2">BOOK NOW</Typography>
                </Button>
              </Stack>
            </Stack>
          )
        )}
      </Stack>
    </Box>
  );
};

export default ChooseACar;
