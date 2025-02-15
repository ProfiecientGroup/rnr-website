import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeStyles from "../HomeStyles";
import SClassCar from "../../../assets/images/home/SClass-car.png";
import whiteStar from "../../../assets/images/home/whiteStar.png";
import goldStar from "../../../assets/images/home/goldStar.png";
import { isTruthy } from "helpers/methods";

const TOP_NAV_HEIGHT = 64;

const BannerSection = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const [email, setEmail] = useState<any>({
    value: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!isTruthy(email.value)) {
        return;
      }
      setIsLoading(true);
      // if (handleValidation()) {
      // await doSubscribe(email.value, "newsletter");
      setEmail({
        value: "",
        error: "",
      });
      setIsSuccess(true);
      // }
    } catch (error: any) {
      setIsLoading(false);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  const handleChange = (event: any) => {
    setEmail({
      value: event.target.value,
      error: "",
    });
  };

  return (
    <Box sx={classes.bgBox}>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          p: 2,
          pl: lgUp ? 6 : 2,
          pr: lgUp ? 6 : 1,
        }}
      >
        <Stack
          alignItems="self-start"
          direction={lgUp ? "row" : "column"}
          justifyContent="space-between"
          spacing={lgUp ? 10 : 5}
        >
          <Stack
            alignItems="center"
            direction="column"
            justifyContent="space-between"
            spacing={2}
          >
            <Box>
              <Typography sx={classes.experiFont} variant="h6">
                <span>
                  <img
                    src={whiteStar.src}
                    height="20px"
                    width="20px"
                    style={{ position: "relative", bottom: 20 }}
                  />
                </span>{" "}
                <span>Experi</span>
                <span style={{ color: theme.palette.primary.main }}>ence</span>
              </Typography>
              <Typography sx={classes.experiFont} variant="h6">
                the Ultim
                <span style={{ color: theme.palette.primary.main }}>
                  ate Luxury
                </span>{" "}
                <span>
                  <img
                    src={goldStar.src}
                    height="20px"
                    width="20px"
                    style={{ position: "relative", top: 10 }}
                  />
                </span>
              </Typography>
            </Box>
            <img src={SClassCar.src} alt="SClassCar" width={lgUp ? "auto" : "90%"}/>
          </Stack>
          <Stack
            direction={"column"}
            spacing={4}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            sx={classes.contactBox}
          >
            <Stack
              direction={"row"}
              spacing={3}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography sx={classes.addressBox} variant="caption">
                Address
              </Typography>
              <Typography sx={classes.pickupBox} variant="caption">
                Airport
              </Typography>
            </Stack>
            <Box sx={classes.verticalLine}></Box>
            <Stack
              direction="column"
              spacing={2}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
            >
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                value={email.value}
                onChange={handleChange}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">
                //       <MailOutlineIcon />
                //     </InputAdornment>
                //   ),
                // }}
                sx={classes.textInputField}
              />
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                value={email.value}
                onChange={handleChange}
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">
                //       <MailOutlineIcon />
                //     </InputAdornment>
                //   ),
                // }}
                sx={classes.textInputField}
              />
              {isSuccess ? (
                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={0.5}
                  pr={1}
                >
                  {/* <DoneIcon
                                  fontSize="small"
                                  htmlColor="#ACC737"
                                /> */}
                  <Typography variant="subtitle2" color="#ACC737">
                    Subscribed
                  </Typography>
                </Stack>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleSubmit}
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
                  {isLoading ? (
                    <CircularProgress size="1.5rem" sx={{ width: "100%" }} />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerSection;
