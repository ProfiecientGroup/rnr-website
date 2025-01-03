import type { TypographyOptions } from "@mui/material/styles/createTypography";
import { Breakpoints } from "@mui/system"; // Import Breakpoints type

// Define the type for the breakpoints parameter
export const createTypography = (
  breakpoints: Breakpoints
): TypographyOptions => {
  return {
    fontFamily:
      '"Inter", Jost, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: "1.15rem",
      fontWeight: 400,
      lineHeight: 1.5,
      fontFamily: "Jost",
      color: "#FFFFFF",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: "1.06rem",
      },
    },
    body2: {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.57,
      fontFamily: "Jost",
      color: "#FFFFFF",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: "0.775rem",
      },
    },
    button: {
      fontWeight: 600,
      fontFamily: "Jost",
    },
    caption: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.25,
      fontFamily: "Jost",
      color: "#FFFFFF",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.57,
      fontFamily: "Jost",
      color: "#FFFFFF",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
      fontFamily: "Jost",
      color: "#FFFFFF",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
      fontFamily: "Jost",
      color: "#FFFFFF",
    },
    h1: {
      fontFamily: "Jost",
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.2,
      color: "#FFFFFF",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: "1.5rem",
      },
    },
    h2: {
      fontFamily: "Jost",
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.2,
      color: "#FFFFFF",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: "1.25rem",
      },
    },
    h3: {
      fontFamily: "Jost",
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.2,
      color: "#FFFFFF",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: "1.15rem",
      },
    },
    h4: {
      fontFamily: "Jost",
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    h5: {
      fontFamily: "Jost",
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
    h6: {
      fontFamily: "Jost",
      fontWeight: 700,
      fontSize: "0.825rem",
      lineHeight: 1.2,
      color: "#FFFFFF",
    },
  };
};
