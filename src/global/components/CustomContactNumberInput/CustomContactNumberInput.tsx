import {
  BaseTextFieldProps,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import {
  CountryIso2,
  defaultCountries,
  FlagEmoji,
  parseCountry,
  usePhoneInput,
} from "react-international-phone";
import customContactNumberStyles from "./CustomContactNumberInput.styles";

export interface MUIPhoneProps extends BaseTextFieldProps {
  label?: string;
  value: string;
  placeHolder?: string;
  error?: any;
  onChange: (phone: string) => void;
}

const CustomContactNumberInput: React.FC<MUIPhoneProps> = ({
  label,
  value,
  placeHolder,
  error,
  onChange,
  required,
  ...restProps
}) => {
  const classes = customContactNumberStyles;

  const { phone, handlePhoneValueChange, inputRef, country, setCountry } =
    usePhoneInput({
      defaultCountry: "us",
      value,
      countries: defaultCountries,
      onChange: (data: any) => {
        onChange(data.phone);
      },
    });

  return (
    <>
      <TextField
        sx={classes.textField}
        variant="outlined"
        fullWidth
        value={phone}
        placeholder={placeHolder}
        onChange={handlePhoneValueChange}
        type="tel"
        inputRef={inputRef}
        {...(error && { error: true, helperText: error })}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Select
                MenuProps={{
                  style: {
                    height: "300px",
                    width: "360px",
                    top: "0px",
                    left: "-34px",
                  },
                  transformOrigin: {
                    vertical: "top",
                    horizontal: "left",
                  },
                }}
                sx={{
                  // width: "max-content",
                  width: "55px",
                  border: "none",
                  // Remove default outline (display only on focus)
                  fieldset: {
                    display: "none",
                  },
                  '&.Mui-focused:has(div[aria-expanded="false"])': {
                    fieldset: {
                      display: "block",
                    },
                  },
                  // Update default spacing
                  ".MuiSelect-select": {
                    padding: "8px",
                    border: "none",
                    paddingRight: "28px !important",
                    "&.focused": {
                      border: "none",
                      fieldset: {
                        // display: "block",
                        border: "none",
                      },
                    },
                  },
                  svg: {
                    right: 0,
                    bottom: 2,
                    top: 5,
                  },
                }}
                value={country}
                onChange={(e) => setCountry(e.target.value as CountryIso2)}
                renderValue={(value) => <FlagEmoji iso2={value} />}
              >
                {defaultCountries.map((c: any) => {
                  const country = parseCountry(c);
                  return (
                    <MenuItem
                      key={country.iso2}
                      value={country.iso2}
                      sx={{
                        gap: "10px",
                      }}
                    >
                      <FlagEmoji
                        iso2={country.iso2}
                        style={{
                          marginRight: "8px",
                          height: "20px",
                          width: "20px",
                        }}
                      />
                      <Typography marginRight="8px">{country.name}</Typography>
                      <Typography color="gray">+{country.dialCode}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </InputAdornment>
          ),
        }}
        {...restProps}
      />
    </>
  );
};

export default CustomContactNumberInput