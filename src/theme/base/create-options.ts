import type { ThemeOptions } from "@mui/material/styles/createTheme";
import type { Direction } from "..";
import { createTypography } from "./create-typography";
import { createComponents } from "./create-components";
import { createBreakpoints } from "@mui/system";

// Define the type for breakpoints
interface Config {
  direction?: Direction;
}

// Here we do not modify the "palette" and "shadows" because "light" and "dark" mode
// may have different values.

export const createOptions = (config: Config): ThemeOptions => {
  const { direction = "ltr" } = config;

  // Use MUI's createBreakpoints to generate the breakpoints
  const breakpoints = createBreakpoints({
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  });

  return {
    breakpoints: breakpoints,
    components: createComponents(),
    direction,
    shape: {
      borderRadius: 8,
    },
    typography: createTypography(breakpoints),
  };
};