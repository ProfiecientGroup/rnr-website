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
        <Stack direction={"row"} spacing={8}>
          <img src={SClassCar.src} alt="SClassCar" width={"auto"} />

          <Stack direction={"column"} spacing={2} alignItems={"flex-end"}>
            <Typography
              sx={{
                fontFamily: "kugile",
                fontWeight: 400,
                fontSize: "42px",
                textAlign: "end",
              }}
            >
              What are you
              <span style={{ color: theme.palette.primary.main }}>
                Waiting for?
              </span>
            </Typography>
            <Button
              variant="contained"
              href={urls.Facebook}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{ width: "35%" }}
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
                width: "35%",
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
