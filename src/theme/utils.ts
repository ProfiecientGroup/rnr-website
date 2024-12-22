import type { PaletteColor } from "@mui/material/styles/createPalette";

import type { ColorPreset } from ".";
import { rnr } from "./colors";

export const getPrimary = (preset?: ColorPreset): PaletteColor => {
  switch (preset) {
    case "rnr":
      return rnr;
    default:
      console.error(
        'Invalid color preset, accepted values: "blue", "green", "indigo" or "purple"".'
      );
      return rnr;
  }
};
