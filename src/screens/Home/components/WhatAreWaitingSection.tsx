import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SClassCar from "../../../assets/images/home/SClass-car.png";
import HomeStyles from "../HomeStyles";
import urls from "global/constants/urls";

const WhatAreWaitingSection = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={{
        ...classes.whatAreWaitingBox,
        padding: "60px 0",
      }}
    >
      <Container maxWidth="xl">
        <Stack direction={isLgUp ? "row" : "column"} spacing={8}>
          <img
            src={SClassCar.src}
            alt="SClassCar"
            width={isLgUp ? "auto" : "90%"}
          />
          <Stack direction={"column"} spacing={2} alignItems={"center"}>
            <Stack direction={"column"} spacing={0} alignItems={"start"}>
              <Typography
                sx={{
                  fontFamily: "kugile",
                  fontWeight: 400,
                  fontSize: "42px",
                  textAlign: "start",
                }}
              >
                What are you
              </Typography>
              <Typography
                sx={{
                  fontFamily: "kugile",
                  fontWeight: 400,
                  fontSize: "42px",
                  textAlign: "start",
                  color: theme.palette.primary.main,
                }}
              >
                Waiting for?
              </Typography>
            </Stack>
            <Button
              variant="contained"
              href={urls.Facebook}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ width: "100%" }}
            >
              <Typography variant="button">Book Now</Typography>
            </Button>
            <Button
              variant="outlined"
              href={urls.Facebook}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                width: "100%",
                border: "1px solid #A04747",
                borderRadius: "25px",
              }}
            >
              <Typography variant="button" sx={{ color: "#FFFFFF" }}>
                VIEW SERVICES
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default WhatAreWaitingSection;
