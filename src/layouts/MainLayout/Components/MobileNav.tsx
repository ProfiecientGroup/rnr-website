import React, { useState } from "react";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Logo from "assets/images/rnr-logo.svg";
import Link from "next/link";
import urls from "global/constants/urls";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import viewpaths from "global/constants/viewPathConstants";
import { isTruthy } from "helpers/methods";
import YouTube from "assets/icons/youtube.svg";
import Facebook from "assets/icons/facebook.svg";
import Instagram from "assets/icons/instagram.svg";
import X from "assets/icons/x.svg";
import LinkedIn from "assets/icons/linkedin.svg";

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
interface CustomProps {
  onClose: Function;
  open: boolean;
  sections?: any;
}

const MOBILE_NAV_WIDTH = "100%";

const MobileNav = (props: CustomProps) => {
  const [dropdown, setDropdown] = useState<string>("");
  const theme = useTheme();

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
                props.onClose();
              }}
            >
              <Typography variant="body1">{title}</Typography>
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
        <Typography variant="body1">{title}</Typography>
        {dropdown === title ? (
          <ExpandLessIcon fontSize="small" />
        ) : (
          <ExpandMoreIcon fontSize="small" />
        )}
      </>
    );
  };

  return (
    <Drawer
      anchor="left"
      onClose={() => props.onClose()}
      open={props.open}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.common.black,
          color: "var(--nav-color)",
          width: MOBILE_NAV_WIDTH,
        },
      }}
      variant="temporary"
    >
      <Stack sx={{ height: "100%" }}>
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ p: 3 }}
        >
          <Link key={"logo"} passHref href={viewpaths.home}>
            <img
              src={Logo.src}
              width="auto"
              height="25px"
              onClick={() => props.onClose()}
              alt="Logo"
            />
          </Link>
          <IconButton onClick={() => props.onClose()}>
            <SvgIcon>
              <CloseIcon />
            </SvgIcon>
          </IconButton>
        </Stack>
        <Divider />
        <Stack
          component="nav"
          spacing={2}
          direction="column"
          sx={{
            p: 3,
          }}
        >
          {props.sections.map((items: any, index: number) => {
            return items.items.map((section: any) => {
              if (section.isExpandable) {
                return (
                  <>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      onClick={() =>
                        setDropdown(
                          dropdown === section.title ? "" : section.title
                        )
                      }
                    >
                      {getDropdown(section.title, section.path)}
                    </Stack>
                  </>
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
                        props.onClose();
                      }}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Typography variant="body1">{section.title}</Typography>
                    </a>
                  </Link>
                );
              }
            });
          })}
        </Stack>
        <Stack
          alignItems="center"
          px={2}
          mt={2}
          spacing={2}
          pb={{ xs: 2, md: 0 }}
        >
          <Button
            variant="contained"
            fullWidth
            href={viewpaths.bookingViewPath}
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<ChevronRightIcon />}
          >
           Book Now !
          </Button>
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
        </Stack>
      </Stack>
    </Drawer>
  );
};

export default MobileNav;
