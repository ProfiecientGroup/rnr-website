import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeStyles from "../HomeStyles";
import aboutCar1 from "../../../assets/images/home/aboutCar1.webp";
import aboutCar2 from "../../../assets/images/home/aboutCar2.webp";

const TOP_NAV_HEIGHT = 64;

const AboutSection = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={classes.aboutBgBox}>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          // p: 2,
          pl: lgUp ? 6 : 2,
          pr: lgUp ? 6 : 2,
        }}
      >
        <Stack
          alignItems="self-start"
          direction="row"
          justifyContent="space-between"
          spacing={10}
        >
          <Stack alignItems="self-start" direction="column" spacing={2}>
            <Typography sx={classes.addressBox} variant="caption">
              Address
            </Typography>
            <Box>
              <Typography
                sx={{ ...classes.experiFont, textAlign: "start",fontSize:"42px" }}
                variant="h5"
              >
                <span>Award Winning</span>
              </Typography>
              <Typography sx={classes.experiFont} variant="h6">
                <span style={{ color: theme.palette.primary.main }}>
                  Outstanding
                </span>{" "}
                Service.
              </Typography>
            </Box>
            <Typography>
              Enjoy outstanding service every step of the way. From the moment
              you contact us, to the moment your chauffeur opens your door.
            </Typography>
            <Typography>
              Winning Awards for Best UK Chauffeur Company demonstrates our
              commitment to providing the best chauffeur service.
            </Typography>
          </Stack>
          <img src={aboutCar1.src} alt="car" height="auto" width="70%"/>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutSection;
