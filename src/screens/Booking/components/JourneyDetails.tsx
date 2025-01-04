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
  Button,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import BookingStyles from "../BookingStyles";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { doBooking } from "./BookingService";

const steps = ["Address", "Airport"];
const tripType = ["One Way", "Round Trip", "By the Hour"];
interface CustomProps {
  handleNext: Function;
}
const JourneyDetails = (props: CustomProps) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [pickActiveStep, setPickActiveStep] = useState(0);
  const [dropActiveStep, setDropActiveStep] = useState(0);
  const [tripTypeActiveStep, setTripTypeActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    pickups: {
      addresses: [{ address: "", in_congestion_zone: false }],
      airports: [{ airport: "", terminal: "", in_congestion_zone: false }],
    },
    dropoffs: {
      addresses: [{ address: "", in_congestion_zone: false }],
      airports: [{ airport: "", terminal: "", in_congestion_zone: false }],
    },
    trip_type:
      tripTypeActiveStep === 0
        ? "one_way"
        : tripTypeActiveStep === 1
        ? "round_trip"
        : "by_hour",
    start_datetime: null,
    end_datetime: null,
    hours: 0,
  });

  const transformLocations = (locations: any) => {
    const addresses = locations.addresses.map((address: any) => ({
      type: "address",
      address: address.address,
      in_congestion_zone: address.in_congestion_zone,
    }));

    const airports = locations.airports.map((airport: any) => ({
      type: "airport",
      airport: airport.airport,
      terminal: airport.terminal,
      in_congestion_zone: airport.in_congestion_zone,
    }));

    return [...addresses, ...airports];
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const body = {
        pickups: transformLocations(formData.pickups),
        dropoffs: transformLocations(formData.dropoffs),
        trip_type: formData.trip_type,
        start_datetime: formData.start_datetime,
        end_datetime: formData.end_datetime || null, // Only include if applicable
        hours: formData.trip_type === "by_hour" ? formData.hours : undefined, // Only include hours if "by_hour"
      };
      await doBooking(body);
      setFormData({
        pickups: {
          addresses: [{ address: "", in_congestion_zone: false }],
          airports: [{ airport: "", terminal: "", in_congestion_zone: false }],
        },
        dropoffs: {
          addresses: [{ address: "", in_congestion_zone: false }],
          airports: [{ airport: "", terminal: "", in_congestion_zone: false }],
        },
        trip_type: "",
        start_datetime: null,
        end_datetime: null,
        hours: 0,
      });
      props.handleNext();
      setIsSuccess(true);
    } catch (error: any) {
      setMessage(error.message);
      setIsSuccess(false);
      setFormData({
        pickups: {
          addresses: [{ address: "", in_congestion_zone: false }],
          airports: [{ airport: "", terminal: "", in_congestion_zone: false }],
        },
        dropoffs: {
          addresses: [{ address: "", in_congestion_zone: false }],
          airports: [{ airport: "", terminal: "", in_congestion_zone: false }],
        },
        trip_type: "",
        start_datetime: null,
        end_datetime: null,
        hours: 0,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Step Click
  const handlePickStepClick = (step: number) => {
    setPickActiveStep(step);
  };
  const handleDropStepClick = (step: number) => {
    setDropActiveStep(step);
  };

  const handleTripTypeStepClick = (step: number) => {
    setTripTypeActiveStep(step);
    const tripTypeValues = ["one_way", "round_trip", "by_hour"];
    const updatedData = { ...formData, trip_type: tripTypeValues[step] };

    // Reset fields based on trip type
    if (step === 0) {
      updatedData.start_datetime = null;
      updatedData.end_datetime = null;
      updatedData.hours = 0;
    } else if (step === 1) {
      updatedData.start_datetime = null;
      updatedData.end_datetime = null;
      updatedData.hours = 0;
    } else if (step === 2) {
      updatedData.start_datetime = null;
      updatedData.end_datetime = null;
    }

    setFormData(updatedData);
  };

  const handleChange = (
    type: "pickups" | "dropoffs",
    field: "addresses" | "airports",
    index: number,
    key: string,
    value: string | number
  ) => {
    const updatedData: any = { ...formData };
    updatedData[type][field][index][key] = value;
    setFormData(updatedData);
  };

  // Handle Add/Remove Fields
  const handleAddField = (
    type: "pickups" | "dropoffs",
    field: "addresses" | "airports"
  ) => {
    const updatedData: any = { ...formData };
    updatedData[type][field].push(
      field === "addresses"
        ? { address: "", in_congestion_zone: false }
        : { airport: "", terminal: "", in_congestion_zone: false }
    );
    setFormData(updatedData);
  };

  const handleRemoveField = (
    type: "pickups" | "dropoffs",
    field: "addresses" | "airports",
    index: number
  ) => {
    if (formData[type][field].length > 1) {
      const updatedData = { ...formData };
      updatedData[type][field].splice(index, 1);
      setFormData(updatedData);
    }
  };

  // Handle Date & Time Changes
  const handleDateChange = (
    field: "start_datetime" | "end_datetime",
    newDate: Dayjs | null
  ) => {
    setFormData({
      ...formData,
      [field]: newDate ? newDate.toISOString() : null, // Convert to ISO format
    });
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

          {/* Pickup Step */}
          <Stack direction={"column"} spacing={3}>
            <Typography variant="body2">Select Pickup Location Type</Typography>
            <Stepper activeStep={pickActiveStep} alternativeLabel>
              {steps.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handlePickStepClick(index)}
                  sx={{
                    cursor: "pointer",
                    ...(index === pickActiveStep
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 }),
                  }}
                >
                  {label}
                </StepLabel>
              ))}
            </Stepper>

            {/* Pickup Address or Airport Selection */}
            {pickActiveStep === 0
              ? formData.pickups.addresses.map((pickup, index) => (
                  <TextField
                    key={index}
                    value={pickup.address}
                    onChange={(e) =>
                      handleChange(
                        "pickups",
                        "addresses",
                        index,
                        "address",
                        e.target.value
                      )
                    }
                    placeholder="Enter Pickup Address"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {index === formData.pickups.addresses.length - 1 && (
                            <IconButton
                              onClick={() =>
                                handleAddField("pickups", "addresses")
                              }
                            >
                              <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
                            </IconButton>
                          )}
                          {formData.pickups.addresses.length > 1 && (
                            <IconButton
                              onClick={() =>
                                handleRemoveField("pickups", "addresses", index)
                              }
                              sx={{
                                color:
                                  formData.pickups.addresses.length === 1
                                    ? "grey"
                                    : "#FFD700",
                              }}
                              disabled={formData.pickups.addresses.length === 1}
                            >
                              <RemoveCircleOutlineIcon />
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={classes.textInputField}
                  />
                ))
              : formData.pickups.airports.map((pickup, index) => (
                  <Stack direction={"row"} spacing={1} key={index}>
                    <FormControl fullWidth sx={classes.selectInputField}>
                      <Select
                        value={pickup.airport}
                        onChange={(e) =>
                          handleChange(
                            "pickups",
                            "airports",
                            index,
                            "airport",
                            e.target.value
                          )
                        }
                        displayEmpty
                      >
                        <MenuItem value="" disabled>
                          Select Airport
                        </MenuItem>
                        <MenuItem value="airport_option_1">
                          Airport Option 1
                        </MenuItem>
                        <MenuItem value="airport_option_2">
                          Airport Option 2
                        </MenuItem>
                      </Select>
                    </FormControl>
                    {index === formData.pickups.airports.length - 1 && (
                      <IconButton
                        onClick={() => handleAddField("pickups", "airports")}
                      >
                        <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
                      </IconButton>
                    )}
                    {formData.pickups.airports.length > 1 && (
                      <IconButton
                        onClick={() =>
                          handleRemoveField("pickups", "airports", index)
                        }
                        sx={{
                          color:
                            formData.pickups.airports.length === 1
                              ? "grey"
                              : "#FFD700",
                        }}
                        disabled={formData.pickups.airports.length === 1}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    )}
                  </Stack>
                ))}
          </Stack>

          {/* Dropoff Step */}
          <Stack direction={"column"} spacing={3}>
            <Typography variant="body2">
              Select Drop Off Location Type
            </Typography>
            <Stepper activeStep={dropActiveStep} alternativeLabel>
              {steps.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handleDropStepClick(index)}
                  sx={{
                    cursor: "pointer",
                    ...(index === dropActiveStep
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 }),
                  }}
                >
                  {label}
                </StepLabel>
              ))}
            </Stepper>

            {dropActiveStep === 0
              ? formData.dropoffs.addresses.map((dropoffs, index) => (
                  <TextField
                    key={index}
                    value={dropoffs.address}
                    onChange={(e) =>
                      handleChange(
                        "dropoffs",
                        "addresses",
                        index,
                        "address",
                        e.target.value
                      )
                    }
                    placeholder="Enter Pickup Address"
                    variant="outlined"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {index === formData.dropoffs.addresses.length - 1 && (
                            <IconButton
                              onClick={() =>
                                handleAddField("dropoffs", "addresses")
                              }
                            >
                              <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
                            </IconButton>
                          )}
                          {formData.dropoffs.addresses.length > 1 && (
                            <IconButton
                              onClick={() =>
                                handleRemoveField(
                                  "dropoffs",
                                  "addresses",
                                  index
                                )
                              }
                              sx={{
                                color:
                                  formData.dropoffs.addresses.length === 1
                                    ? "grey"
                                    : "#FFD700",
                              }}
                              disabled={
                                formData.dropoffs.addresses.length === 1
                              }
                            >
                              <RemoveCircleOutlineIcon />
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                    sx={classes.textInputField}
                  />
                ))
              : formData.dropoffs.airports.map((dropoffs, index) => (
                  <Stack direction={"row"} spacing={1} key={index}>
                    <FormControl fullWidth sx={classes.selectInputField}>
                      <Select
                        value={dropoffs.airport}
                        onChange={(e) =>
                          handleChange(
                            "dropoffs",
                            "airports",
                            index,
                            "airport",
                            e.target.value
                          )
                        }
                        displayEmpty
                      >
                        <MenuItem value="" disabled>
                          Select Airport
                        </MenuItem>
                        <MenuItem value="airport_option_1">
                          Airport Option 1
                        </MenuItem>
                        <MenuItem value="airport_option_2">
                          Airport Option 2
                        </MenuItem>
                      </Select>
                    </FormControl>
                    {index === formData.dropoffs.airports.length - 1 && (
                      <IconButton
                        onClick={() => handleAddField("dropoffs", "airports")}
                      >
                        <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
                      </IconButton>
                    )}
                    {formData.dropoffs.airports.length > 1 && (
                      <IconButton
                        onClick={() =>
                          handleRemoveField("dropoffs", "airports", index)
                        }
                        sx={{
                          color:
                            formData.dropoffs.airports.length === 1
                              ? "grey"
                              : "#FFD700",
                        }}
                        disabled={formData.dropoffs.airports.length === 1}
                      >
                        <RemoveCircleOutlineIcon />
                      </IconButton>
                    )}
                  </Stack>
                ))}
          </Stack>

          {/* Trip Type Step */}
          <Stack direction={"column"} spacing={3}>
            <Typography variant="body2">Select Trip Type</Typography>
            <Stepper activeStep={tripTypeActiveStep} alternativeLabel>
              {tripType.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handleTripTypeStepClick(index)}
                  sx={{
                    cursor: "pointer",
                    ...(index === tripTypeActiveStep
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 }),
                  }}
                >
                  {label}
                </StepLabel>
              ))}
            </Stepper>

            {/* DateTime Picker for Trip Type */}
            {tripTypeActiveStep === 0 && (
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="Select Start Date and Time"
                  value={formData.start_datetime}
                  onChange={(newDate: any) =>
                    handleDateChange("start_datetime", newDate)
                  }
                />
              </LocalizationProvider>
            )}

            {tripTypeActiveStep === 1 && (
              <>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select Start Date and Time"
                    value={formData.start_datetime}
                    onChange={(newDate: any) =>
                      handleDateChange("start_datetime", newDate)
                    }
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select End Date and Time"
                    value={formData.end_datetime}
                    onChange={(newDate: any) =>
                      handleDateChange("end_datetime", newDate)
                    }
                  />
                </LocalizationProvider>
              </>
            )}

            {tripTypeActiveStep === 2 && (
              <>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select Start Date and Time"
                    value={formData.start_datetime}
                    onChange={(newDate: any) =>
                      handleDateChange("start_datetime", newDate)
                    }
                  />
                </LocalizationProvider>
                <TextField
                  placeholder="Enter Hours"
                  variant="outlined"
                  type="number"
                  value={formData.hours}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      hours: Number(e.target.value),
                    })
                  }
                  sx={classes.textInputField}
                />
              </>
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
              onClick={handleSubmit}
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
