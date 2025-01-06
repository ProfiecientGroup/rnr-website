import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Logo from "assets/images/rnr-logo.svg";
import Link from "next/link";
import viewpaths from "../../../global/constants/viewPathConstants";
import hamburger from "../../../assets/svg/hamburger.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { isTruthy } from "helpers/methods";
import urls from "global/constants/urls";
import ContactsBanner from "./ContactsBanner";
import { useRouter } from "next/router";

const TOP_NAV_HEIGHT = 64;

interface CustomProps {
  onMobileNavOpen: () => void;
  sections?: any;
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
}

const TopNav = (props: CustomProps) => {
  const [dropdown, setDropdown] = useState<string>("");
  const theme = useTheme();
  const router = useRouter();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    const handleClickOutside = () => {
      if (dropdown) {
        setDropdown("");
        props.setIsDrawerOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdown]);

  useEffect(() => {
    if (!lgUp) {
      props.setIsDrawerOpen(false);
    }
  }, [lgUp]);

  const isActiveTab = (asPath: string) => {
    const pathNameURL = router.asPath;
    if (pathNameURL === asPath || pathNameURL === asPath + "/") {
      return true;
    }
    return false;
  };

  const getDropdown = (title: string, path: string) => {
    if (isTruthy(path)) {
      return (
        <>
          <Link key={title} passHref href={path} legacyBehavior>
            <a
              href={path}
              onClick={(e) => {
                e.stopPropagation();
                setDropdown("");
                props.setIsDrawerOpen(false);
              }}
            >
              <Typography
                variant="body2"
                sx={[
                  isActiveTab(path) && {
                    color: "#DDB863",
                    fontWeight: 500,
                  },
                ]}
              >
                {title}
              </Typography>
            </a>
          </Link>
          {dropdown === title ? (
            <ExpandLessIcon fontSize="small" />
          ) : (
            <ExpandMoreIcon fontSize="small" />
          )}
        </>
      );
    }
    return (
      <>
        <Typography variant="body2">{title}</Typography>
        {dropdown === title ? (
          <ExpandLessIcon fontSize="small" />
        ) : (
          <ExpandMoreIcon fontSize="small" />
        )}
      </>
    );
  };

  return (
    <Box
      component="header"
      position="fixed"
      width="100%"
      top={0}
      left={0}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar,
        background: theme.palette.primary.darkest,
      }}
    >
      <ContactsBanner />
      <Container
        maxWidth="lg"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          // borderBottom:
          //   "1px solid linear-gradient(90deg, #161616 12.08%, rgba(221, 184, 99, 0.5) 64.5%, #161616 86.27%);",
          p: 2,
          pl: lgUp ? 6 : 2,
          pr: lgUp ? 6 : 2,
          backgroundColor: theme.palette.primary.darkest,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px', // Adjust the height of the border
            background: 'linear-gradient(90deg, #161616 12.08%, rgba(221, 184, 99, 0.5) 64.5%, #161616 86.27%)',
          },
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
        >
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
          {lgUp && (
            <>
              <Stack
                alignItems="center"
                component="nav"
                direction="row"
                spacing={4}
              >
                {props.sections.map((items: any, index: number) => {
                  return items.items.map((section: any) => {
                    if (section.isExpandable) {
                      return (
                        <Stack
                          key={section.title}
                          direction="row"
                          alignItems="center"
                          spacing={1}
                          sx={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            setDropdown(
                              dropdown === section.title ? "" : section.title
                            );
                            props.setIsDrawerOpen(dropdown !== section.title);
                          }}
                        >
                          {getDropdown(section.title, section.path)}
                        </Stack>
                      );
                    } else {
                      return (
                        <Link
                          key={section.title}
                          passHref
                          href={section.path}
                          legacyBehavior
                        >
                          <a
                            href={section.path}
                            onClick={(e) => {
                              e.stopPropagation();
                              setDropdown("");
                              props.setIsDrawerOpen(false);
                            }}
                            style={{
                              textDecoration: "none",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={[
                                {
                                  textTransform: "uppercase",
                                },
                                isActiveTab(section.path) && {
                                  color: theme.palette.primary.main,
                                  fontWeight: 400,
                                  textTransform: "uppercase",
                                },
                              ]}
                            >
                              {section.title}
                            </Typography>
                          </a>
                        </Link>
                      );
                    }
                  });
                })}
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1.5}
              >
                <Link
                  color={theme.palette.primary.main}
                  passHref
                  href={urls.Facebook}
                  legacyBehavior
                >
                  <a
                    href={urls.Facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        textTransform: "uppercase",
                      }}
                      color={theme.palette.primary.main}
                    >
                      Login
                    </Typography>
                  </a>
                </Link>
                <Button
                  variant="contained"
                  href={urls.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Typography variant="button">Book</Typography>
                </Button>
              </Stack>
            </>
          )}
          {!lgUp && (
            <IconButton onClick={props.onMobileNavOpen}>
              <img src={hamburger.src} alt="Hamburger Menu" />
            </IconButton>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default TopNav;
