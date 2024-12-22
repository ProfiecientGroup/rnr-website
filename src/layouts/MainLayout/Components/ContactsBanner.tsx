import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import urls from "global/constants/urls";
import React, { useState } from "react";
import Link from "next/link";
import viewpaths from "global/constants/viewPathConstants";
import mainIcon from "assets/icons/Navbar/mail_icon.svg";
import uk_flag_icon from "assets/icons/Navbar/uk_flag_icon.svg";
import YouTube from "../../../assets/icons/youtube.svg";
import Facebook from "../../../assets/icons/facebook.svg";
import Instagram from "../../../assets/icons/instagram.svg";
import X from "../../../assets/icons/x.svg";
import LinkedIn from "../../../assets/icons/linkedin.svg";
import strings from "global/constants/strings";

const TOP_NAV_HEIGHT = 64;

const socialHandles = [
  {
    link: urls.Facebook,
    alt: "Facebook",
    image: Facebook.src,
  },
  {
    link: urls.X,
    alt: "X",
    image: X.src,
  },
  {
    link: urls.YouTube,
    alt: "YouTube",
    image: YouTube.src,
  },
  {
    link: urls.LinkedIn,
    alt: "LinkedIn",
    image: LinkedIn.src,
  },
  {
    link: urls.Instagram,
    alt: "Instagram",
    image: Instagram.src,
  },
];

const ContactsBanner = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const mdUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box
        p={1}
        textAlign="center"
        sx={{
          // background: "#1A1A1A"
          background:
            "linear-gradient(286deg, #1A1A1A 20.08%, rgb(221 184 99 / 26%) 30.5%, #1A1A1A 51.27%)",
          // "-webkit-background-clip": "text",
          // "-webkit-text-fill-color": "transparent",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            display: "flex",
            alignItems: "center",
            justifyContent: mdUp ? "space-between" : "center",
            pl: lgUp ? 6 : 2,
            pr: lgUp ? 6 : 2,
            flexDirection: mdUp ? "row" : "column",
          }}
        >
          <Stack
            direction={{
              xl: "row",
              lg: "row",
              md: "row",
              sm: "column",
              xs: "column",
            }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
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
            {lgUp && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Divider
                  orientation="vertical"
                  sx={{
                    height: "18px",
                    borderColor: "#B3B3B3",
                    borderWidth: 1,
                  }}
                />
              </Box>
            )}
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
          <Stack direction="row" spacing={1}>
            {socialHandles.map((handle: any, index: number) => (
              <Link passHref href={handle.link} legacyBehavior key={index}>
                <a href={handle.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={handle.image}
                    alt={handle.alt}
                    loading="lazy"
                    height="28px"
                    width="28px"
                  />
                </a>
              </Link>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ContactsBanner;
