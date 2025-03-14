import { alpha } from "@mui/system/colorManipulator";
import { backdropClasses } from "@mui/material/Backdrop";
import { filledInputClasses } from "@mui/material/FilledInput";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { paperClasses } from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";
import { common } from "@mui/material/colors";
import type { Components } from "@mui/material/styles/components";
import type {
  PaletteColor,
  PaletteOptions,
} from "@mui/material/styles/createPalette";

interface Config {
  palette: PaletteOptions;
}

export const createComponents = ({ palette }: Config): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutral![200],
          color: common.black,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          [`&:not(.${backdropClasses.invisible})`]: {
            backgroundColor: alpha(palette.neutral![900], 0.75),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          [`&.${paperClasses.elevation1}`]: {
            boxShadow:
              "0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        icon: {
          color: palette.action!.active,
        },
        root: {
          borderColor: palette.neutral![200],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "#nprogress .bar": {
          backgroundColor: (palette.primary as PaletteColor).main,
        },
        ".slick-dots li button": {
          "&:before": {
            fontSize: 10,
            color: (palette.primary as PaletteColor).main,
          },
        },
        ".slick-dots li.slick-active button": {
          "&:before": {
            color: (palette.primary as PaletteColor).main,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            color: palette.text!.secondary,
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: palette.neutral![200],
          "&:hover": {
            backgroundColor: palette.action!.hover,
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: "transparent",
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: "transparent",
            borderColor: (palette.primary as PaletteColor).main,
            boxShadow: `${(palette.primary as PaletteColor).main} 0 0 0 2px`,
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: (palette.error as PaletteColor).main,
            boxShadow: `${(palette.error as PaletteColor).main} 0 0 0 2px`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: "0.875rem",
          fontWeight: 400,
          lineHeight: 1.57,
          padding: "10px 10px",
          "&::placeholder": {
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.57,
            color: "#AFB4BC",
            opacity: 1,
          },
        },
        root: {
          "&:hover": {
            backgroundColor: palette.action!.hover,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.neutral![200],
            },
          },
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: "transparent",
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "#B9A0EF",
              borderWidth: "1px",
            },
          },
          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: (palette.error as PaletteColor).main,
              borderWidth: "1px",
              fontSize: "0.875rem",
            },
          },
        },
        notchedOutline: {
          borderColor: palette.neutral![200],
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: palette.neutral![500],
        },
        track: {
          backgroundColor: palette.neutral![400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: palette.divider,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          [`& .${tableCellClasses.root}`]: {
            backgroundColor: palette.neutral![50],
            color: palette.neutral![700],
          },
        },
      },
    },
// @ts-expect-error: The MuiTimelineConnector component doesn't exist in the current MUI types
MuiTimelineConnector: {
  styleOverrides: {
    root: {
      backgroundColor: palette.divider,
    },
  },
},

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backdropFilter: "blur(6px)",
          background: alpha(palette.neutral![900], 0.8),
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: `1px solid #D9DBE9`,
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&::before": {
            display: "none",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "13px",
          color: "#242A3A",
          "&.MuiInputLabel-root": {
            fontSize: "14px",
          },
        },
        asterisk: {
          color: "#ff0000",
        },
      },
    },
  };
};
