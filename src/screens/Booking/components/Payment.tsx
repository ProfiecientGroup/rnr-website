import React from "react";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import BookingStyles from "../BookingStyles";
import car1 from "../../../assets/images/booking/car1.svg";

const paymentDetails = [
  { title: "Total", value: "£290.00" },
  { title: "VAT", value: "£30.00" },
  { title: "Payable Amount", value: "£320.00" },
];

const Payment = () => {
  const theme = useTheme();
  const classes = BookingStyles(theme);

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
      <Stack direction="column" spacing={4}>
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
          Payment Details
        </Typography>
        <Stack direction="column" spacing={2} sx={carItemStyle}>
          <Stack direction="row" spacing={2}>
            <img src={car1.src} width="400px" alt={"car"} />
            <Stack direction="column" spacing={2}>
              <Typography>Mercedes S-Class</Typography>
              <Typography>Tuesday 3 December 2024</Typography>
              <Typography>John Grey</Typography>
              <Typography>john123@demo.com</Typography>
              <Typography>+44 (0)12 1234 1234</Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
              background: " #DDB863",
              borderTop: "1px solid",
              borderImageSource:
                "linear-gradient(87.19deg, #030303 4.68%, #DDB863 49.2%, #030303 95.32%)",
            }}
          ></Box>
          <Stack
            direction={"row"}
            spacing={1}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            {paymentDetails.map((item, i) => (
              <Box key={i}>
                <Typography key={i}>{item.title} </Typography>
                <Typography key={i}>{item.value} </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: theme.palette.primary.darkest,
              border: `1px solid ${theme.palette.primary.contrastText}`,
              color: "#fff",
              width: "100%",
              borderRadius: "100px",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: theme.palette.primary.darkest,
              },
            }}
          >
            <Typography variant="body2">Back To HOME</Typography>
          </Button>
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
            <Typography variant="body2">GET MY PRICES</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Payment;
