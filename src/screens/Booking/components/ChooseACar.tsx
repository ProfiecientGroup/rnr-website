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
    model: "E_CLASS",
    description: ["4 adults", "2 suitcases", "2 carry bags", "WiFi"],
    imgSrc: car1.src,
    extraInfo:
      "First class chauffeur Free 60 mins airport parking & waiting Free 15 mins waiting for other journeys Includes meet & greet Free cancellation within 24 hours",
    price: "£290.00",
  },
  {
    model: "S_CLASS",
    description: ["4 adults", "2 suitcases", "2 carry bags", "WiFi"],
    imgSrc: car1.src,
    extraInfo:
      "First class chauffeur Free 60 mins airport parking & waiting Free 15 mins waiting for other journeys Includes meet & greet Free cancellation within 24 hours",
    price: "£350.00",
  },
  {
    model: "V_CLASS",
    description: ["4 adults", "2 suitcases", "2 carry bags", "WiFi"],
    imgSrc: car1.src,
    extraInfo:
      "First class chauffeur Free 60 mins airport parking & waiting Free 15 mins waiting for other journeys Includes meet & greet Free cancellation within 24 hours",
    price: "£320.00",
  },
];
interface CustomProps {
  bookingData: any;
}

const ChooseACar = (props: CustomProps) => {
  const { bookingData } = props;
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

  // Map carData and replace price with the corresponding final_price
  const updatedCarData = carData.map((car) => {
    const matchingPrice =
      bookingData &&
      bookingData?.prices?.find(
        (p: any) => p.car_class === car.model.toUpperCase().replace(" ", "_")
      );

    return {
      ...car,
      final_price: matchingPrice
        ? `£${matchingPrice.final_price.toFixed(2)}`
        : "N/A",
    };
  });

  return (
    <Box sx={classes.chooseACarBg} mt={3}>
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
          <span style={{ color: theme.palette.primary.main }}>Step 3.</span>{" "}
          Available Cars
        </Typography>
        <Typography variant="body2" color={theme.palette.primary.main}>
          {updatedCarData.length} Cars Available
        </Typography>
        {updatedCarData.map(
          ({ model, description, imgSrc, extraInfo, final_price }, index) => (
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
                <Typography>{final_price}</Typography>
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
