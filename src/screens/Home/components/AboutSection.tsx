import React from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeStyles from "../HomeStyles";
import aboutCar1 from "../../../assets/images/home/about-car.webp";
import urls from "global/constants/urls";
import strings from "global/constants/strings";

const TOP_NAV_HEIGHT = 64;

const AboutSection = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={classes.aboutBgBox}>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          padding: isLgUp ? "0 48px" : "0 16px",
        }}
      >
        <Stack
          direction={isMdUp ? "row" : "column"}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          <Stack alignItems={isMdUp ? "flex-start" : "center"} spacing={2}>
            <Typography
              sx={{ ...classes.experiFont, color: theme.palette.primary.main }}
              variant="h6"
              align={isMdUp ? "left" : "center"}
            >
              About Us
            </Typography>
            <Typography align={isMdUp ? "left" : "center"}>
              RNR Chauffeurs is a premier Chauffeur service in Wokingham. We
              provide luxury, reliable chauffeur services tailored to your
              needs. Our professional drivers and premium fleet ensure a
              seamless, elegant travel experience.
            </Typography>
            <Typography align={isMdUp ? "left" : "center"}>
              Whether for airport transfers, corporate travel, or special
              events, we prioritize comfort, safety, and punctuality. Operating
              in Wokingham and surrounding areas, we are proud to serve our
              community with top-tier transport solutions. Choose RNR Chauffeurs
              for first-class service, anytime, anywhere.
            </Typography>
            <Button
              variant="contained"
              href={urls.Facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="button">{strings.readMore}</Typography>
            </Button>
          </Stack>
          <Box
            component="img"
            src={aboutCar1.src}
            alt="Luxury car"
            sx={{
              width: isMdUp ? "50%" : "100%",
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Stack>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: isLgUp ? 10 : 5,
            paddingBottom: isLgUp ? 10 : 5,          }}
        >
          <Box sx={classes.verticalLine}></Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
