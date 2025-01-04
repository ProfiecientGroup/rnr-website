import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputAdornment,
  IconButton,
  Stepper,
  StepLabel,
  Stack,
  useTheme,
  OutlinedInput,
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import BookingStyles from "../BookingStyles";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const steps = ["Address", "Airport"];
const tripType = ["One Way", "Round Trip", "By the Hour"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const JourneyDetails = () => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [activeStep, setActiveStep] = useState(0);
  const [tripTypeActiveStep, setTripTypeActiveStep] = useState(0);
  const [fields, setFields] = useState([""]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [selectedDateAndTime, setSelectedDateAndTime] = useState<Dayjs | null>(
    null
  );

  const handleSelectTimeChange = (newTime: Dayjs | null) => {
    setSelectedTime(newTime);
  };
  const handleDateAndTimeChange = (newTime: Dayjs | null) => {
    setSelectedDateAndTime(newTime);
  };
  const handleDateChange = (newDate: Date | null) => {
    setSelectedDate(newDate);
  };

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string);
  };

  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  const handleRemoveField = (index: number) => {
    if (fields.length > 1) {
      const updatedFields = fields.filter((_, i) => i !== index);
      setFields(updatedFields);
    }
  };

  const handleChange = (index: number, value: string) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
  };

  const handleStepClick = (step: number) => {
    setActiveStep(step); // Set the active step to the clicked step
  };

  const handleTripTypeStepClick = (step: number) => {
    setTripTypeActiveStep(step); // Set the active step to the clicked step
  };

  return (
    <>
      <Box sx={classes.journeyDetailsBg}>
        <Stack direction={"column"} spacing={4}>
          <Typography
            variant="h2"
            sx={{
              ...classes.experiFont,
              fontSize: "24px !important",
              textAlign: "start",
            }}
          >
            <span style={{ color: theme.palette.primary.main }}>Step 1.</span>{" "}
            Get a Price and Book
          </Typography>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="body2">Select Pickup Location Type</Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handleStepClick(index)} // Make StepLabel clickable
                  sx={{
                    cursor: "pointer", // Add pointer cursor to indicate clickability
                    ...(index === activeStep
                      ? {
                          ...classes.addressBox,
                          marginRight: 2,
                          "& .css-1u1yok5-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                            {
                              marginTop: 0,
                            },
                        }
                      : {
                          ...classes.pickupBox,
                          marginRight: 2,
                          "& .css-1u1yok5-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                            {
                              marginTop: 0,
                            },
                        }),
                  }}
                >
                  {label}
                </StepLabel>
              ))}
            </Stepper>

            {/* Conditional Content Based on Active Step */}
            {activeStep === 0 ? (
              // "Address" Step Content - Dynamic Input Fields
              <>
                {fields.map((field, index) => (
                  <TextField
                    key={index}
                    value={field}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder="Enter Pick Up Address"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {/* Add Button */}
                          {index === fields.length - 1 && (
                            <IconButton
                              onClick={handleAddField}
                              sx={{ color: "#FFD700" }}
                            >
                              <AddCircleOutlineIcon />
                            </IconButton>
                          )}
                          {/* Remove Button */}
                          {fields.length > 1 && (
                            <IconButton
                              onClick={() => handleRemoveField(index)}
                              sx={{
                                color: fields.length === 1 ? "grey" : "#FFD700",
                              }}
                              disabled={fields.length === 1}
                            >
                              <RemoveCircleOutlineIcon />
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={classes.textInputField}
                  />
                ))}
              </>
            ) : (
              // "Airport" Step Content - Dropdown
              <FormControl fullWidth sx={classes.selectInputField}>
                <Select
                  value={selectedValue}
                  onChange={() => handleSelectChange} // Corrected the onChange
                  label="Select Airport"
                >
                  <MenuItem value="airport_option_4">Airport Option 4</MenuItem>
                  <MenuItem value="airport_option_5">Airport Option 5</MenuItem>
                </Select>
              </FormControl>
            )}
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="body2">
              Select Drop Off Location Type
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handleStepClick(index)} // Make StepLabel clickable
                  sx={{
                    cursor: "pointer", // Add pointer cursor to indicate clickability
                    ...(index === activeStep
                      ? {
                          ...classes.addressBox,
                          marginRight: 2,
                          "& .css-1u1yok5-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                            {
                              marginTop: 0,
                            },
                        }
                      : {
                          ...classes.pickupBox,
                          marginRight: 2,
                          "& .css-1u1yok5-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                            {
                              marginTop: 0,
                            },
                        }),
                  }}
                >
                  {label}
                </StepLabel>
              ))}
            </Stepper>

            {/* Conditional Content Based on Active Step */}
            {activeStep === 0 ? (
              // "Address" Step Content - Dynamic Input Fields
              <>
                {fields.map((field, index) => (
                  <TextField
                    key={index}
                    value={field}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder="Enter Drop Off Address"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {/* Add Button */}
                          {index === fields.length - 1 && (
                            <IconButton
                              onClick={handleAddField}
                              sx={{ color: "#FFD700" }}
                            >
                              <AddCircleOutlineIcon />
                            </IconButton>
                          )}
                          {/* Remove Button */}
                          {fields.length > 1 && (
                            <IconButton
                              onClick={() => handleRemoveField(index)}
                              sx={{
                                color: fields.length === 1 ? "grey" : "#FFD700",
                              }}
                              disabled={fields.length === 1}
                            >
                              <RemoveCircleOutlineIcon />
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={classes.textInputField}
                  />
                ))}
              </>
            ) : (
              // "Airport" Step Content - Dropdown
              <FormControl fullWidth sx={classes.selectInputField}>
                <Select
                  value={selectedValue}
                  onChange={() => handleSelectChange} // Corrected the onChange
                  label="Select Airport"
                >
                  <MenuItem value="airport_option_4">Airport Option 4</MenuItem>
                  <MenuItem value="airport_option_5">Airport Option 5</MenuItem>
                </Select>
              </FormControl>
            )}
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="body2">Select Trip Type</Typography>
            <Stepper activeStep={tripTypeActiveStep} alternativeLabel>
              {tripType.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handleTripTypeStepClick(index)} // Make StepLabel clickable
                  sx={{
                    cursor: "pointer", // Add pointer cursor to indicate clickability
                    ...(index === tripTypeActiveStep
                      ? {
                          ...classes.addressBox,
                          marginRight: 2,
                          "& .css-1u1yok5-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                            {
                              marginTop: 0,
                            },
                        }
                      : {
                          ...classes.pickupBox,
                          marginRight: 2,
                          "& .css-1u1yok5-MuiStepLabel-label.MuiStepLabel-alternativeLabel":
                            {
                              marginTop: 0,
                            },
                        }),
                  }}
                >
                  {label}
                </StepLabel>
              ))}
            </Stepper>

            {tripTypeActiveStep === 0 && (
              <Stack direction={"row"} spacing={2}>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      value={selectedDate}
                      onChange={handleDateChange}
                    />
                  </LocalizationProvider>
                </Box>
                <Box>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      value={selectedTime}
                      onChange={handleSelectTimeChange}
                    />
                  </LocalizationProvider>
                </Box>
              </Stack>
            )}

            {tripTypeActiveStep === 1 && (
              <Stack direction={"column"} spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select Date and Time"
                    value={selectedDateAndTime}
                    onChange={handleDateAndTimeChange}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select Date and Time"
                    value={selectedDateAndTime}
                    onChange={handleDateAndTimeChange}
                  />
                </LocalizationProvider>
              </Stack>
            )}
            {tripTypeActiveStep === 2 && (
              <Stack direction={"column"} spacing={2}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select Date and Time"
                    value={selectedDateAndTime}
                    onChange={handleDateAndTimeChange}
                  />
                </LocalizationProvider>
                <TextField
                  placeholder="Enter your hour"
                  variant="outlined"
                  value="hour"
                  type="number"
                  sx={classes.textInputField}
                />
              </Stack>
            )}
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: theme.palette.primary.darkest,
                border: `1px solid ${theme.palette.primary.contrastText}`,
                color: "#fff",
                width: "100%",
                borderRadius: "100px",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: theme.palette.primary.darkest,
                },
              }}
            >
              <Typography variant="body2">Back To HOME</Typography>
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.contrastText,
                color: "#fff",
                width: "100%",
                borderRadius: "100px",
                textTransform: "uppercase",
                "&:hover": {
                  backgroundColor: theme.palette.primary.contrastText,
                },
              }}
            >
              <Typography variant="body2">GET MY PRICES</Typography>
            </Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default JourneyDetails;
