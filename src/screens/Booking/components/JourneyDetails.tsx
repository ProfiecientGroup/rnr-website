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

const addresses = ["1", "2", "3"];
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
    pickups: [
      {
        type: "address",
        address: "",
      },
    ],
    dropoffs: [
      {
        type: "address",
        address: "",
      },
    ],
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

  console.log(formData);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await doBooking({ ...formData });
      setFormData({
        pickups: [
          {
            type: "",
            address: "",
          },
        ],
        dropoffs: [
          {
            type: "",
            address: "",
          },
        ],
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
        pickups: [
          {
            type: "",
            address: "",
          },
        ],
        dropoffs: [
          {
            type: "",
            address: "",
          },
        ],
        trip_type: "",
        start_datetime: null,
        end_datetime: null,
        hours: 0,
      });
    } finally {
      setIsLoading(false);
    }
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
    setFormData((prev: any) => ({
      ...prev,
      [field]: formattedDateTime,
    }));
  };

  const handleTabChange = (index: number, type: "address" | "airport") => {
    const updatedData = [...formData.pickups];
    updatedData[index].type = type; // Change the type
    updatedData[index].address = ""; // Clear the address when switching type
    setFormData({ ...formData, pickups: updatedData });
  };

  const handleFieldChange = (index: number, key: string, value: string) => {
    const updatedData: any = [...formData.pickups];
    updatedData[index][key] = value; // Update the field
    setFormData({ ...formData, pickups: updatedData });
  };

  const handleAddField = (
    type: "pickups" | "dropoffs",
    selectedType: "address" | "airport"
  ) => {
    const updatedData = [...formData.pickups];
    updatedData.push({
      type: selectedType,
      address: "",
    });
    setFormData({ ...formData, pickups: updatedData });
  };

  const handleRemoveField = (index: number) => {
    const updatedData = [...formData.pickups];
    updatedData.splice(index, 1); // Remove the section
    setFormData({ ...formData, pickups: updatedData });
  };

  const handleTabChangeDropoffs = (
    index: number,
    type: "address" | "airport"
  ) => {
    const updatedData = [...formData.dropoffs];
    updatedData[index].type = type; // Change the type
    updatedData[index].address = ""; // Clear the address when switching type
    setFormData({ ...formData, dropoffs: updatedData });
  };

  const handleFieldChangeDropoffs = (
    index: number,
    key: string,
    value: string
  ) => {
    const updatedData: any = [...formData.dropoffs];
    updatedData[index][key] = value; // Update the field
    setFormData({ ...formData, dropoffs: updatedData });
  };

  const handleAddFieldDropoffs = (selectedType: "address" | "airport") => {
    const updatedData = [...formData.dropoffs];
    updatedData.push({
      type: selectedType,
      address: "",
    });
    setFormData({ ...formData, dropoffs: updatedData });
  };

  const handleRemoveFieldDropoffs = (index: number) => {
    const updatedData = [...formData.dropoffs];
    updatedData.splice(index, 1); // Remove the section
    setFormData({ ...formData, dropoffs: updatedData });
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
                    formData.pickups[0].type === "address"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    formData.pickups[0].type === "address" ? "black" : "white",
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
                    formData.pickups[0].type === "airport"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    formData.pickups[0].type === "airport" ? "black" : "white",
                }}
                onClick={() => handleTabChange(0, "airport")}
              >
                Airport
              </Typography>
            </Stack>

            {/* First Input Field */}
            <Stack direction="row" spacing={1}>
              {formData.pickups[0].type === "address" ? (
                <GoogleAutocompleteInput
                  value={formData.pickups[0].address || ""}
                  // placeholder="Enter Pick Up Address"
                  onChange={(newValue: string) =>
                    handleFieldChange(0, "address", newValue)
                  }
                />
              ) : (
                <Select
                  placeholder="Select airport"
                  id="address"
                  name="address"
                  value={formData.pickups[0].address || ""}
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
                    color: formData.pickups[0].address === "" ? "#B3B3B3" : "",
                    width: "100%",
                    background: "transparent",
                    borderRadius: "25px",
                  }}
                  renderValue={
                    formData.pickups[0].address !== ""
                      ? () => formData.pickups[0].address
                      : () => "Select address"
                  }
                  displayEmpty
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
              <IconButton onClick={() => handleAddField("pickups", "address")}>
                <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
              </IconButton>
            </Stack>

            {/* Dynamic Via Sections */}
            {formData.pickups.slice(1).map((pickup: any, index) => (
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
                          : { ...classes.pickupBox, marginRight: 2 },
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
                          : { ...classes.pickupBox, marginRight: 2 },
                      color: pickup.type === "airport" ? "black" : "white",
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
                    />
                  ) : (
                    <Select
                      placeholder="Select airport"
                      id="address"
                      name="address"
                      value={pickup.address || ""}
                      onChange={(e) =>
                        handleFieldChange(index + 1, "address", e.target.value)
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
                  <IconButton onClick={() => handleRemoveField(index + 1)}>
                    <RemoveCircleOutlineIcon sx={{ color: "#FFD700" }} />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
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
                    formData.dropoffs[0].type === "address"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    formData.dropoffs[0].type === "address" ? "black" : "white",
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
                    formData.dropoffs[0].type === "airport"
                      ? { ...classes.addressBox, marginRight: 2 }
                      : { ...classes.pickupBox, marginRight: 2 },
                  color:
                    formData.dropoffs[0].type === "airport" ? "black" : "white",
                }}
                onClick={() => handleTabChangeDropoffs(0, "airport")}
              >
                Airport
              </Typography>
            </Stack>

            {/* First Input Field */}
            <Stack direction="row" spacing={1}>
              {formData.dropoffs[0].type === "address" ? (
                <GoogleAutocompleteInput
                  value={formData.dropoffs[0].address || ""}
                  // placeholder="Enter Dropoff Address"
                  onChange={(newValue: string) =>
                    handleFieldChangeDropoffs(0, "address", newValue)
                  }
                />
              ) : (
                <Select
                  placeholder="Select airport"
                  id="address"
                  name="address"
                  value={formData.dropoffs[0].address || ""}
                  onChange={(e) =>
                    handleFieldChangeDropoffs(0, "address", e.target.value)
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
                    color: formData.dropoffs[0].address === "" ? "#B3B3B3" : "",
                    width: "100%",
                    background: "transparent",
                    borderRadius: "25px",
                  }}
                  renderValue={
                    formData.dropoffs[0].address !== ""
                      ? () => formData.dropoffs[0].address
                      : () => "Select address"
                  }
                  displayEmpty
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
                // <FormControl fullWidth sx={{ minWidth: "200px" }}>
                //   <Select
                // value={formData.dropoffs[0].address || ""}
                // onChange={(e) =>
                //   handleFieldChangeDropoffs(0, "address", e.target.value)
                // }
                //     displayEmpty
                //   >
                //     <MenuItem value="" disabled>
                //       Select Airport
                //     </MenuItem>
                //     <MenuItem value="Airport Option 1">
                //       Airport Option 1
                //     </MenuItem>
                //     <MenuItem value="Airport Option 2">
                //       Airport Option 2
                //     </MenuItem>
                //   </Select>
                // </FormControl>
              )}
              <IconButton onClick={() => handleAddFieldDropoffs("address")}>
                <AddCircleOutlineIcon sx={{ color: "#FFD700" }} />
              </IconButton>
            </Stack>

            {/* Dynamic Via Sections */}
            {formData.dropoffs.slice(1).map((dropoff: any, index) => (
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
                          : { ...classes.pickupBox, marginRight: 2 },
                      color: dropoff.type === "address" ? "black" : "white",
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
                          : { ...classes.pickupBox, marginRight: 2 },
                      // color: dropoff.type === "airport" ? "black" : "white",
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
                      // placeholder="Enter Dropoff Address"
                      onChange={(newValue: string) =>
                        handleFieldChangeDropoffs(
                          index + 1,
                          "address",
                          newValue
                        )
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
                          sx: {
                            ...classes.menuItems,
                          },
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
          </Stack>

          {/* Trip Type Step */}
          <Stack direction={"column"} spacing={3}>
            <Typography variant="body2">Select Trip Type</Typography>
            <Stepper activeStep={tripTypeActiveStep} alternativeLabel>
              {tripType.map((label, index) => (
                <StepLabel
                  key={index}
                  onClick={() => handleTripTypeStepClick(index)}
                  sx={{}}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      cursor: "pointer",
                      ...(index === tripTypeActiveStep
                        ? { ...classes.addressBox, marginRight: 2 }
                        : { ...classes.pickupBox, marginRight: 2 }),
                    }}
                  >
                    {label}
                  </Typography>
                </StepLabel>
              ))}
            </Stepper>

            {/* DateTime Picker for Trip Type */}
            {tripTypeActiveStep === 0 && (
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <DateTimePicker
                  value={
                    formData.start_datetime
                      ? moment(formData.start_datetime)
                      : null
                  }
                  onChange={(newValue) =>
                    handleDateAndTimeChange(newValue, "start_datetime")
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
                    onChange={(newValue) =>
                      handleDateAndTimeChange(newValue, "start_datetime")
                    }
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Select End Date and Time"
                    value={formData.end_datetime}
                    onChange={(newValue) =>
                      handleDateAndTimeChange(newValue, "end_datetime")
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
                    onChange={(newValue) =>
                      handleDateAndTimeChange(newValue, "start_datetime")
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
