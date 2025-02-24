import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  FormHelperText,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Link from "next/link";
import viewpaths from "global/constants/viewPathConstants";
import strings from "global/constants/strings";
import { getCurrentYear, isTruthy } from "helpers/methods";
import Logo from "assets/images/rnr-logo.svg";
import mainIcon from "assets/icons/Navbar/mail_icon.svg";
import uk_flag_icon from "assets/icons/Navbar/uk_flag_icon.svg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  const [email, setEmail] = useState<any>({
    value: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleValidation = () => {
    let errors = email;
    let isValid = true;
    const emailRegex = strings.regex;
    const emailAddress = email.value;

    if (!emailAddress) {
      errors.error = "Please enter email";
      isValid = false;
    }
    if (emailAddress) {
      if (!emailRegex.test(emailAddress)) {
        errors.error = "Please enter valid email";
        isValid = false;
      }
    }
    setEmail({ ...errors });
    return isValid;
  };

  const handleSubmit = async () => {
    try {
      if (!isTruthy(email.value)) {
        return;
      }
      setIsLoading(true);
      if (handleValidation()) {
        // await doSubscribe(email.value, "newsletter");
        setEmail({
          value: "",
          error: "",
        });
        setIsSuccess(true);
      }
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

  const getLinkItem = (text: string, hyperlink: string, color?: string) => {
    return (
      <Link passHref href={hyperlink} legacyBehavior>
        <a
          href={hyperlink}
          style={{
            textDecoration: "none",
          }}
        >
          <Typography
            variant="body2"
            color={theme.palette.primary.light}
            sx={{ color: color }}
          >
            {text}
          </Typography>
        </a>
      </Link>
    );
  };

  return (
    <Box
      sx={{
        background: "#1A1A1A",
        mt: 5,
        p: 4,
        width: "auto",
        borderTop: "1px solid",
        borderImageSource:
          "linear-gradient(87.19deg, #030303 4.68%, #DDB863 49.2%, #030303 95.32%)",
        borderImageSlice: 1,
        borderTopRightRadius: "50px",
        borderTopLeftRadius: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Box mb={3}>
          <Link passHref href={viewpaths.home} legacyBehavior>
            <a href={viewpaths.home}>
              <img
                src={Logo.src}
                aria-label="Logo"
                height={lgUp ? "50px" : "55px"}
                alt="Logo"
              />
            </a>
          </Link>
        </Box>
        <Stack spacing={3}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              display="flex"
              justifyContent="center"
              alignItems="start"
              sx={{ paddingLeft: "0 !important" }}
            >
              <Stack spacing={2.5}>
                <Typography variant="body2">
                  Unparalleled levels of service for a surprisingly affordable
                  price. The finest selection of vehicles – coupled with the
                  best chauffeurs in the business.
                </Typography>
                <Link
                  color="#212121"
                  passHref
                  href={viewpaths.contactUs}
                  legacyBehavior
                >
                  <a
                    href={viewpaths.contactUs}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <img src={mainIcon.src} alt="Contact Us" />{" "}
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.primary.light }}
                      >
                        {strings.EMAIL}
                      </Typography>
                    </Stack>
                  </a>
                </Link>
                <Link
                  color="#212121"
                  passHref
                  href={viewpaths.contactUs}
                  legacyBehavior
                >
                  <a
                    href={viewpaths.contactUs}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <img src={uk_flag_icon.src} alt="Contact Us" />{" "}
                      <Typography
                        variant="body2"
                        sx={{ color: theme.palette.primary.light }}
                      >
                        {strings.PHONE}
                      </Typography>
                    </Stack>
                  </a>
                </Link>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              display="flex"
              justifyContent={{ md: "end", sm: "end", sx: "start" }}
              alignItems="start"
              sx={{ paddingLeft: "0 !important" }}
            >
              <Stack spacing={1}>
                <Typography
                  color={theme.palette.primary.lightest}
                  variant="body2"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  Our Cars
                </Typography>
                <Stack spacing={0.5}>
                  {getLinkItem("Mercedes V-Class & EQV", viewpaths.home)}
                  {getLinkItem("Mercedes S-Class", viewpaths.home)}
                  {getLinkItem("Mercedes E-Class", viewpaths.home)}
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              display="flex"
              justifyContent={{ md: "end", sm: "end", sx: "start" }}
              alignItems="start"
              sx={{ paddingLeft: "0 !important" }}
            >
              <Stack spacing={1}>
                <Typography
                  color={theme.palette.primary.lightest}
                  variant="body2"
                  sx={{
                    textTransform: "uppercase",
                  }}
                >
                  OUR SERVICES
                </Typography>
                <Stack spacing={0.5}>
                  {getLinkItem("Events", viewpaths.terms)}
                  {getLinkItem("One Way", viewpaths.terms)}
                  {getLinkItem("By the Hour", viewpaths.terms)}
                  {getLinkItem("Airport", viewpaths.terms)}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Divider
            sx={{
              borderColor: "#E5E7EB33",
            }}
          />
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <Typography variant="body2" color={theme.palette.primary.lightest}>
              &copy; Copyright {getCurrentYear()} RNR. All Rights Reserved
            </Typography>
            <Stack direction="row" spacing={2}>
              {getLinkItem(
                "Terms of Service",
                viewpaths.terms,
                theme.palette.primary.lightest
              )}
              {getLinkItem(
                "Privacy Policy",
                viewpaths.privacyPolicy,
                theme.palette.primary.lightest
              )}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
