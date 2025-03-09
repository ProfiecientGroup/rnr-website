import React, { useState, useEffect } from "react";
import { Autocomplete, InputAdornment, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { googleApi } from "./BookingService";
import BookingStyles from "../BookingStyles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
interface GoogleAutocompleteInputProps {
  onChange: (value: string) => void;
  value: string;
  error?: boolean;
  helperText?: string;
}

const GoogleAutocompleteInput: React.FC<GoogleAutocompleteInputProps> = ({
  onChange,
  value, // External prop for input value
  error = false,
  helperText = "",
}) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [options, setOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value); // State for input value

  // Sync inputValue with external value
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Fetch autocomplete suggestions
  const fetchPredictions = async (input: string) => {
    if (!input) {
      setOptions([]);
      return;
    }

    setLoading(true);
    try {
      const response = await googleApi(input);
      setOptions(response?.predictions || []);
    } catch (error) {
      console.error("Error fetching Google Places data", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Autocomplete
      sx={classes.textInputField}
      freeSolo
      options={options.map((option) => option.description)}
      inputValue={inputValue} // Ensure controlled input
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
        fetchPredictions(newInputValue);
      }}
      onChange={(_, newValue) => {
        if (newValue) {
          onChange(newValue);
          setInputValue(newValue); // Ensure input field updates
        } else {
          onChange("");
          setInputValue("");
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Enter a location"
          variant="outlined"
          fullWidth
          error={error}
          helperText={helperText}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="end">
                <LocationOnIcon color="primary" />
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {loading && <CircularProgress color="inherit" size={20} />}
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
