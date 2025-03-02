import React, { useState } from "react";
import { Autocomplete, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { googleApi } from "./BookingService";
import BookingStyles from "../BookingStyles";

interface GoogleAutocompleteInputProps {
  onChange: (value: string) => void;
  value: string;
  error?: boolean; // Add error prop
  helperText?: string; // Add helperText prop
}

const GoogleAutocompleteInput: React.FC<GoogleAutocompleteInputProps> = ({
  onChange,
  value,
  error = false, // Default error to false
  helperText = "", // Default helperText to empty string
}) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [options, setOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Handle the input change to fetch predictions
  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;

    if (!inputValue) {
      setOptions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await googleApi(inputValue); // Fetch predictions from Google API
      setOptions(response?.predictions || []);
    } catch (error) {
      console.error("Error fetching Google Places data", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle the selection of an address
  const handleSelectionChange = (event: any, newValue: string | null) => {
    if (newValue) {
      onChange(newValue); // Update the address with the selected value
    } else {
      onChange(""); // Handle case when user clears the input (e.g., using backspace)
    }
  };

  return (
    <Autocomplete
      sx={classes.textInputField}
      freeSolo
      options={options.map((option: any) => option.description)} // Map predictions to description
      onInputChange={(_, value) =>
        handleInputChange({
          target: { value },
        } as React.ChangeEvent<HTMLInputElement>)
      }
      onChange={handleSelectionChange} // Handle selection change
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Enter a location"
          variant="outlined"
          fullWidth
          type="text"
          value={value} // Bind value here
          error={error} // Pass error to TextField
          helperText={helperText} // Pass helperText to TextField
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default GoogleAutocompleteInput;
