import React, { useState, useEffect } from "react";
import { Autocomplete, InputAdornment, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import { googleApi } from "./BookingService";
import BookingStyles from "../BookingStyles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { v4 as uuidv4 } from "uuid"; 

interface GoogleAutocompleteInputProps {
  onChange: (value: string) => void;
  value: string;
  error?: boolean;
  helperText?: string;
}

const GoogleAutocompleteInput: React.FC<GoogleAutocompleteInputProps> = ({
  onChange,
  value,
  error = false,
  helperText = "",
}) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [options, setOptions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  
  // Sync inputValue with external value
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  // Fetch autocomplete suggestions with session ID validation
  const fetchPredictions = async (input: string) => {
    if (!input) {
      setOptions([]);
      return;
    }

    setLoading(true);
    const currentSessionId = uuidv4(); 
    try {
      const response = await googleApi(input, currentSessionId);
      if (response?.session_id === currentSessionId) {
        // Validate session ID before updating state
        setOptions(response?.results?.predictions || []);
      } else {
        console.warn("Session ID mismatch. Ignoring response.");
      }
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
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
        fetchPredictions(newInputValue);
      }}
      onChange={(_, newValue) => {
        if (newValue) {
          onChange(newValue);
          setInputValue(newValue);
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
