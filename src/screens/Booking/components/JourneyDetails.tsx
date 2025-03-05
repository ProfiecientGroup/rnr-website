import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  IconButton,
  Stepper,
  StepLabel,
  Stack,
  useTheme,
  Button,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import BookingStyles from "../BookingStyles";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";
import { doBooking } from "./BookingService";
import GoogleAutocompleteInput from "./GoogleAutocompleteInput ";
import moment from "moment";
import { isTruthy } from "helpers/methods";
import viewpaths from "global/constants/viewPathConstants";

const addresses = [
  "Heathrow Terminal 2",
  "Heathrow Terminal 3",
  "Heathrow Terminal 4",
  "Heathrow Terminal 5",
  "Gatwick South Terminals",
  "Gatwick North Terminals",
  "Luton Airport",
  "Stansted Airport",
  "City Airport",
  "St Pancras (Train Station)",
  "Farnborough Airport",
  "RAF Northolt",
  "Southend On Sea",
  "Reading Station",
  "Twyford Station",
  "Bracknell Station",
  "Southampton Docks",
];

const tripType = ["One Way", "Round Trip", "By the Hour"];
interface CustomProps {
  handleNext?: Function;
  formData: any;
  setFormData: Function;
  tripTypeActiveStep: number;
  setTripTypeActiveStep: Function;
  errors: any;
  setErrors: Function;
}
const JourneyDetails = (props: CustomProps) => {
  const theme = useTheme();
  const classes = BookingStyles(theme);
  const [isLoading, setIsLoading] = useState(false);

  const handleTripTypeStepClick = (step: number) => {
    props.setTripTypeActiveStep(step);
    const tripTypeValues = ["one_way", "round_trip", "by_hour"];
    const updatedData = { ...props.formData, trip_type: tripTypeValues[step] };

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

    props.setFormData(updatedData);
  };

  // Handle Date & Time Changes
  const handleDateAndTimeChange = (
    value: any,
    field: "start_datetime" | "end_datetime"
  ) => {
    if (!value || !moment(value).isValid()) {
      console.error("Invalid date/time value");
      return;
    }

    const formattedDateTime = value
      ? moment(value).format("YYYY-MM-DD HH:mm")
      : null;
    props.setFormData((prev: any) => ({
      ...prev,
      [field]: formattedDateTime,
    }));
  };

  const handleTabChange = (index: number, type: "address" | "airport") => {
    const updatedData = [...props.formData.pickups];
    updatedData[index].type = type; // Change the type
    updatedData[index].address = ""; // Clear the address when switching type
    props.setFormData({ ...props.formData, pickups: updatedData });
  };

  // const handleFieldChange = (index: number, key: string, value: string) => {
  //   const updatedData: any = [...props.formData.pickups];
  //   updatedData[index][key] = value; // Update the field
  //   props.setFormData({ ...props.formData, pickups: updatedData });
  // };

  const handleFieldChange = (index: number, key: string, value: string) => {
    const updatedData = [...props.formData.pickups];

    // Ensure the index exists in the array
    if (!updatedData[index]) {
      updatedData[index] = { type: "address", address: "" };
    }

    // Update the field
    updatedData[index][key] = value;

    props.setFormData({ ...props.formData, pickups: updatedData });
  };

  const handleAddField = (
    type: "pickups" | "dropoffs",
    selectedType: "address" | "airport"
  ) => {
    const updatedData = [...props.formData.pickups];
    updatedData.push({
      type: selectedType,
      address: "",
    });
    props.setFormData({ ...props.formData, pickups: updatedData });
  };

  const handleRemoveField = (index: number) => {
    const updatedData = [...props.formData.pickups];
    updatedData.splice(index, 1); // Remove the section
    props.setFormData({ ...props.formData, pickups: updatedData });
  };

  const handleTabChangeDropoffs = (
    index: number,
    type: "address" | "airport"
  ) => {
    const updatedData = [...props.formData.dropoffs];
    updatedData[index].type = type; // Change the type
    updatedData[index].address = ""; // Clear the address when switching type
    props.setFormData({ ...props.formData, dropoffs: updatedData });
  };

  const handleFieldChangeDropoffs = (
    index: number,
    key: string,
    value: string
  ) => {
    const updatedData: any = [...props.formData.dropoffs];
    updatedData[index][key] = value; // Update the field
    props.setFormData({ ...props.formData, dropoffs: updatedData });
  };

  const handleAddFieldDropoffs = (selectedType: "address" | "airport") => {
    const updatedData = [...props.formData.dropoffs];
    updatedData.push({
      type: selectedType,
      address: "",
    });
    props.setFormData({ ...props.formData, dropoffs: updatedData });
  };

  const handleRemoveFieldDropoffs = (index: number) => {
    const updatedData = [...props.formData.dropoffs];
    updatedData.splice(index, 1); // Remove the section
    props.setFormData({ ...props.formData, dropoffs: updatedData });
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
          <Stack direction="column" spacing={3}>
            <Typography variant="body2" sx={{ color: "white" }}>
              Select Pickup Location Type
            </Typography>

            {/* Top-Level Address and Airport Tabs */}
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "16px",
                  backgroundColor:
                    props.formData.pickups[0].type === "address"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    props.formData.pickups[0].type === "address"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleTabChange(0, "address")}
              >
                Address
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "16px",
                  backgroundColor:
                    props.formData.pickups[0].type === "airport"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    props.formData.pickups[0].type === "airport"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleTabChange(0, "airport")}
              >
                Airport
              </Typography>
            </Stack>

            {/* First Input Field */}
            <Stack direction="row" spacing={1}>
              {props.formData.pickups[0].type === "address" ? (
                <GoogleAutocompleteInput
                  value={props.formData.pickups[0].address || ""}
                  // placeholder="Enter Pick Up Address"
                  onChange={(newValue: string) =>
                    handleFieldChange(0, "address", newValue)
                  }
                  error={
                    !isTruthy(props.formData.pickups[0].address) &&
                    props.errors.pickups[0].address
                  }
                  helperText={
                    !isTruthy(props.formData.pickups[0].address) &&
                    props.errors.pickups[0].address
                  }
                />
              ) : (
                <Stack direction="column" spacing={0} width="100%">
                  <Select
                    placeholder="Select airport"
                    id="address"
                    name="address"
                    value={props.formData.pickups[0].address || ""}
                    onChange={(e) =>
                      handleFieldChange(0, "address", e.target.value)
                    }
                    input={<OutlinedInput />}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          ...classes.menuItems,
                        },
                      },
                    }}
                    sx={classes.selectMenu}
                    style={{
                      color:
                        props.formData.pickups[0].address === ""
                          ? "#B3B3B3"
                          : "",
                      width: "100%",
                      background: "transparent",
                      borderRadius: "25px",
                    }}
                    renderValue={
                      props.formData.pickups[0].address !== ""
                        ? () => props.formData.pickups[0].address
                        : () => "Select address"
                    }
                    displayEmpty
                    error={
                      !isTruthy(props.formData.pickups[0].address) &&
                      props.errors.pickups[0].address
                    }
                  >
                    {addresses?.map((address: any, index: number) => {
                      return (
                        <MenuItem
                          sx={classes.optionStyle}
                          value={address}
                          key={index}
                        >
                          {address}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  {!isTruthy(props.formData.pickups[0].address) && (
                    <FormHelperText error>
                      {props.errors.pickups[0].address}
                    </FormHelperText>
                  )}
                </Stack>
              )}
              <IconButton onClick={() => handleAddField("pickups", "address")}>
                <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
              </IconButton>
            </Stack>

            {/* Dynamic Via Sections */}
            {props.formData.pickups.length > 1 && (
              <Box
                sx={{
                  backgroundColor: "#1A1A1A",
                  p: 3,
                  borderRadius: "20px",
                }}
              >
                {props.formData.pickups
                  .slice(1)
                  .map((pickup: any, index: any) => (
                    <Stack
                      key={index + 1}
                      direction="column"
                      spacing={2}
                      sx={{ mb: 3 }}
                    >
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Via {index + 1}
                      </Typography>

                      {/* Tabs for Address and Airport */}
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="body2"
                          sx={{
                            cursor: "pointer",
                            padding: "8px 16px",
                            borderRadius: "16px",
                            backgroundColor:
                              pickup.type === "address"
                                ? { ...classes.addressBox, marginRight: 2 }
                                : {
                                    ...classes.pickupBox,
                                    backgroundColor: "black",
                                    marginRight: 2,
                                  },
                            // color: pickup.type === "address" ? "black" : "white",
                          }}
                          onClick={() => handleTabChange(index + 1, "address")}
                        >
                          Address
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            cursor: "pointer",
                            padding: "8px 16px",
                            borderRadius: "16px",
                            backgroundColor:
                              pickup.type === "airport"
                                ? { ...classes.addressBox, marginRight: 2 }
                                : {
                                    ...classes.pickupBox,
                                    backgroundColor: "black",
                                    marginRight: 2,
                                  },
                            color:
                              pickup.type === "airport" ? "black" : "white",
                          }}
                          onClick={() => handleTabChange(index + 1, "airport")}
                        >
                          Airport
                        </Typography>
                      </Stack>

                      {/* Input Fields for Address or Airport */}
                      <Stack direction="row" spacing={1}>
                        {pickup.type === "address" ? (
                          <GoogleAutocompleteInput
                            value={pickup.address || ""}
                            // placeholder="Enter Pick Up Address"
                            onChange={(newValue: string) =>
                              handleFieldChange(index + 1, "address", newValue)
                            }
                            error={
                              (!isTruthy(pickup.address) &&
                                (props.errors.pickups[index + 1] || {})
                                  ?.address) ||
                              ""
                            }
                          />
                        ) : (
                          <Select
                            placeholder="Select airport"
                            id="address"
                            name="address"
                            value={pickup.address || ""}
                            onChange={(e) =>
                              handleFieldChange(
                                index + 1,
                                "address",
                                e.target.value
                              )
                            }
                            input={<OutlinedInput />}
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  ...classes.menuItems,
                                },
                              },
                            }}
                            sx={classes.selectMenu}
                            style={{
                              color: pickup.address === "" ? "#B3B3B3" : "",
                              width: "100%",
                              background: "transparent",
                              borderRadius: "25px",
                            }}
                            renderValue={
                              pickup.address !== ""
                                ? () => pickup.address
                                : () => "Select address"
                            }
                            displayEmpty
                            error={
                              props.errors.pickups[index + 1]?.address || ""
                            }
                            // error={
                            //   !isTruthy(pickup.address) &&
                            //   props.errors.pickup[index].address
                            // }
                          >
                            {addresses?.map((address: any, index: number) => {
                              return (
                                <MenuItem
                                  sx={classes.optionStyle}
                                  value={address}
                                  key={index}
                                >
                                  {address}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        )}
                        <IconButton
                          onClick={() => handleAddField("pickups", pickup.type)}
                        >
                          <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
                        </IconButton>
                        <IconButton
                          onClick={() => handleRemoveField(index + 1)}
                        >
                          <RemoveCircleOutlineIcon sx={{ color: "#FFD700" }} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  ))}
              </Box>
            )}
          </Stack>

          {/* dropoffs step */}
          <Stack direction="column" spacing={3}>
            <Typography variant="body2" sx={{ color: "white" }}>
              Select Dropoffs Location Type
            </Typography>

            {/* Top-Level Address and Airport Tabs */}
            <Stack direction="row" spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "16px",
                  backgroundColor:
                    props.formData.dropoffs[0].type === "address"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    props.formData.dropoffs[0].type === "address"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleTabChangeDropoffs(0, "address")}
              >
                Address
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  cursor: "pointer",
                  padding: "8px 16px",
                  borderRadius: "16px",
                  backgroundColor:
                    props.formData.dropoffs[0].type === "airport"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    props.formData.dropoffs[0].type === "airport"
                      ? "black"
                      : "white",
                }}
                onClick={() => handleTabChangeDropoffs(0, "airport")}
              >
                Airport
              </Typography>
            </Stack>

            {/* First Input Field */}
            <Stack direction="row" spacing={1}>
              {props.formData.dropoffs[0].type === "address" ? (
                <GoogleAutocompleteInput
                  value={props.formData.dropoffs[0].address || ""}
                  onChange={(newValue: string) =>
                    handleFieldChangeDropoffs(0, "address", newValue)
                  }
                  error={
                    !isTruthy(props.formData.dropoffs[0].address) &&
                    props.errors.dropoffs[0].address
                  }
                  helperText={
                    !isTruthy(props.formData.dropoffs[0].address) &&
                    props.errors.dropoffs[0].address
                  }
                />
              ) : (
                <Stack direction="column" spacing={0} width="100%">
                  <Select
                    placeholder="Select airport"
                    id="address"
                    name="address"
                    value={props.formData.dropoffs[0].address || ""}
                    onChange={(e) =>
                      handleFieldChangeDropoffs(0, "address", e.target.value)
                    }
                    input={<OutlinedInput />}
                    MenuProps={{
                      PaperProps: {
                        sx: { ...classes.menuItems },
                      },
                    }}
                    sx={classes.selectMenu}
                    style={{
                      color:
                        props.formData.dropoffs[0].address === ""
                          ? "#B3B3B3"
                          : "",
                      width: "100%",
                      background: "transparent",
                      borderRadius: "25px",
                    }}
                    renderValue={
                      props.formData.dropoffs[0].address !== ""
                        ? () => props.formData.dropoffs[0].address
                        : () => "Select address"
                    }
                    displayEmpty
                    error={
                      !isTruthy(props.formData.dropoffs[0].address) &&
                      props.errors.dropoffs[0].address
                    }
                  >
                    {addresses?.map((address: any, index: number) => (
                      <MenuItem
                        sx={classes.optionStyle}
                        value={address}
                        key={index}
                      >
                        {address}
                      </MenuItem>
                    ))}
                  </Select>
                  {!isTruthy(props.formData.dropoffs[0].address) && (
                    <FormHelperText error>
                      {props.errors.dropoffs[0].address}
                    </FormHelperText>
                  )}
                </Stack>
              )}
              <IconButton onClick={() => handleAddFieldDropoffs("address")}>
                <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
              </IconButton>
            </Stack>

            {/* Dynamic Via Sections */}
            {props.formData.dropoffs.length > 1 && (
              <Box
                sx={{
                  backgroundColor: "#1A1A1A",
                  p: 3,
                  borderRadius: "20px",
                }}
              >
                {props.formData.dropoffs
                  .slice(1)
                  .map((dropoff: any, index: any) => (
                    <Stack
                      key={index + 1}
                      direction="column"
                      spacing={2}
                      sx={{ mb: 3 }}
                    >
                      <Typography variant="body2" sx={{ color: "white" }}>
                        Via {index + 1}
                      </Typography>

                      {/* Tabs for Address and Airport */}
                      <Stack direction="row" spacing={2}>
                        <Typography
                          variant="body2"
                          sx={{
                            cursor: "pointer",
                            padding: "8px 16px",
                            borderRadius: "16px",
                            backgroundColor:
                              dropoff.type === "address"
                                ? { ...classes.addressBox, marginRight: 2 }
                                : {
                                    ...classes.pickupBox,
                                    backgroundColor: "black",
                                    marginRight: 2,
                                  },
                            color:
                              dropoff.type === "address" ? "black" : "white",
                          }}
                          onClick={() =>
                            handleTabChangeDropoffs(index + 1, "address")
                          }
                        >
                          Address
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            cursor: "pointer",
                            padding: "8px 16px",
                            borderRadius: "16px",
                            backgroundColor:
                              dropoff.type === "airport"
                                ? { ...classes.addressBox, marginRight: 2 }
                                : {
                                    ...classes.pickupBox,
                                    backgroundColor: "black",
                                    marginRight: 2,
                                  },
                          }}
                          onClick={() =>
                            handleTabChangeDropoffs(index + 1, "airport")
                          }
                        >
                          Airport
                        </Typography>
                      </Stack>

                      {/* Input Fields for Address or Airport */}
                      <Stack direction="row" spacing={1}>
                        {dropoff.type === "address" ? (
                          <GoogleAutocompleteInput
                            value={dropoff.address || ""}
                            onChange={(newValue: string) =>
                              handleFieldChangeDropoffs(
                                index + 1,
                                "address",
                                newValue
                              )
                            }
                            error={Boolean(
                              props.errors.dropoffs?.[index + 1]?.address
                            )}
                            helperText={
                              props.errors.dropoffs?.[index + 1]?.address
                            }
                          />
                        ) : (
                          <Select
                            placeholder="Select airport"
                            id="address"
                            name="address"
                            value={dropoff.address || ""}
                            onChange={(e) =>
                              handleFieldChangeDropoffs(
                                index + 1,
                                "address",
                                e.target.value
                              )
                            }
                            input={<OutlinedInput />}
                            MenuProps={{
                              PaperProps: {
                                sx: { ...classes.menuItems },
                              },
                            }}
                            sx={classes.selectMenu}
                            style={{
                              color: dropoff.address === "" ? "#B3B3B3" : "",
                              width: "100%",
                              background: "transparent",
                              borderRadius: "25px",
                            }}
                            renderValue={
                              dropoff.address !== ""
                                ? () => dropoff.address
                                : () => "Select address"
                            }
                            displayEmpty
                            error={Boolean(
                              props.errors.dropoffs?.[index + 1]?.address
                            )}
                            // helperText={props.error.dropoffs?.[index + 1]?.address}
                          >
                            {addresses?.map((address: any, index: number) => (
                              <MenuItem
                                sx={classes.optionStyle}
                                value={address}
                                key={index}
                              >
                                {address}
                              </MenuItem>
                            ))}
                          </Select>
                        )}
                        <IconButton
                          onClick={() => handleAddFieldDropoffs(dropoff.type)}
                        >
                          <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
                        </IconButton>
                        <IconButton
                          onClick={() => handleRemoveFieldDropoffs(index + 1)}
                        >
                          <RemoveCircleOutlineIcon sx={{ color: "#FFD700" }} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  ))}
              </Box>
            )}
          </Stack>

          {/* Trip Type Step */}
          <Stack direction={"column"} spacing={2}>
            <Typography variant="body2">Select Trip Type</Typography>
            <Stepper activeStep={props.tripTypeActiveStep} alternativeLabel>
              {tripType.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handleTripTypeStepClick(index)}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: "pointer",
                      ...(index === props.tripTypeActiveStep
                        ? { ...classes.addressBox, marginRight: 1 }
                        : { ...classes.pickupBox, marginRight: 1 }),
                    }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              ))}
            </Stepper>
            {props.tripTypeActiveStep === 0 && (
              <Box width="100%">
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <DateTimePicker
                    value={
                      props.formData.start_datetime
                        ? moment(props.formData.start_datetime)
                        : null
                    }
                    onChange={(newValue) =>
                      handleDateAndTimeChange(newValue, "start_datetime")
                    }
                    sx={{
                      ...classes.timePicker,
                      "& .MuiFilledInput-root": {
                        borderColor: props.errors.start_datetime
                          ? "#F04438 !important"
                          : theme.palette.primary.main,
                      },
                    }}
                    onError={
                      !isTruthy(props.formData.start_datetime) &&
                      props.errors.start_datetime
                    }
                  />
                </LocalizationProvider>
                {!isTruthy(props.formData.start_datetime) && (
                  <FormHelperText error sx={{ ml: 2 }}>
                    {props.errors.start_datetime}
                  </FormHelperText>
                )}
              </Box>
            )}
            <Stack>
              {props.tripTypeActiveStep === 1 && (
                <>
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DateTimePicker
                        value={
                          props.formData.start_datetime
                            ? moment(props.formData.start_datetime)
                            : null
                        }
                        onChange={(newValue) =>
                          handleDateAndTimeChange(newValue, "start_datetime")
                        }
                        sx={{
                          ...classes.timePicker,
                          "& .MuiFilledInput-root": {
                            borderColor: props.errors.start_datetime
                              ? "#F04438 !important"
                              : theme.palette.primary.main,
                          },
                        }}
                        onError={
                          !isTruthy(props.formData.start_datetime) &&
                          props.errors.start_datetime
                        }
                      />
                    </LocalizationProvider>
                    {!isTruthy(props.formData.start_datetime) && (
                      <FormHelperText error sx={{ ml: 2 }}>
                        {props.errors.start_datetime}
                      </FormHelperText>
                    )}
                  </Box>
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DateTimePicker
                        value={
                          props.formData.end_datetime
                            ? moment(props.formData.end_datetime)
                            : null
                        }
                        onChange={(newValue) =>
                          handleDateAndTimeChange(newValue, "end_datetime")
                        }
                        sx={{
                          ...classes.timePicker,
                          "& .MuiFilledInput-root": {
                            borderColor: props.errors.end_datetime
                              ? "#F04438 !important"
                              : theme.palette.primary.main,
                          },
                        }}
                        onError={
                          !isTruthy(props.formData.end_datetime) &&
                          props.errors.end_datetime
                        }
                      />
                    </LocalizationProvider>
                    {!isTruthy(props.formData.end_datetime) && (
                      <FormHelperText error sx={{ ml: 2 }}>
                        {props.errors.end_datetime}
                      </FormHelperText>
                    )}
                  </Box>
                </>
              )}
            </Stack>
            <Stack spacing={1}>
              {props.tripTypeActiveStep === 2 && (
                <>
                  <Box>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DateTimePicker
                        value={
                          props.formData.start_datetime
                            ? moment(props.formData.start_datetime)
                            : null
                        }
                        onChange={(newValue) =>
                          handleDateAndTimeChange(newValue, "start_datetime")
                        }
                        sx={{
                          ...classes.timePicker,
                          "& .MuiFilledInput-root": {
                            borderColor: props.errors.start_datetime
                              ? "#F04438 !important"
                              : theme.palette.primary.main,
                          },
                        }}
                        onError={
                          !isTruthy(props.formData.start_datetime) &&
                          props.errors.start_datetime
                        }
                      />
                    </LocalizationProvider>
                    {!isTruthy(props.formData.start_datetime) && (
                      <FormHelperText error sx={{ ml: 2 }}>
                        {props.errors.start_datetime}
                      </FormHelperText>
                    )}
                  </Box>
                  <TextField
                    placeholder="Enter Hours"
                    variant="outlined"
                    type="number"
                    value={props.formData.hours}
                    onChange={(e) =>
                      props.setFormData({
                        ...props.formData,
                        hours: Number(e.target.value),
                      })
                    }
                    sx={classes.textInputField}
                    error={!!props.errors.hours}
                    helperText={props.errors.hours || ""}
                  />
                </>
              )}
            </Stack>
          </Stack>

          <Stack direction={"row"} spacing={2}>
            <Button
              variant="contained"
              fullWidth
              href={viewpaths.home}
              rel="noopener noreferrer"
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
              <Typography variant="body2">Back To Home</Typography>
            </Button>
            <Button
              variant="contained"
              onClick={() => props.handleNext && props.handleNext()}
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
