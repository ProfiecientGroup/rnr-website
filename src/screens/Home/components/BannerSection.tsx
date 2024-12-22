import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeStyles from "../HomeStyles";
import SClassCar from "../../../assets/images/home/SClass-car.svg";

const TOP_NAV_HEIGHT = 64;

const Home = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={classes.bgBox}>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          borderBottom: "1px solid #DDB863",
          p: 2,
          pl: lgUp ? 6 : 2,
          pr: lgUp ? 6 : 2,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
          <Stack
            alignItems="center"
            direction="column"
            justifyContent="space-between"
            spacing={2}
          >
            <Typography
              sx={{
                fontFamily: "Kugile_Demo",
                fontSize: "24rem",
              }}
              variant="h1"
            >
              Experience the Ultimate Luxury
            </Typography>
            <img src={SClassCar.src} alt="SClassCar" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
