import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  OutlinedInput,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SClassCar from "../../../assets/images/home/SClass-car.png";
import whiteStar from "../../../assets/images/home/whiteStar.webp";
import goldStar from "../../../assets/images/home/goldStar.webp";
import { isTruthy } from "helpers/methods";
import HomeStyles from "../HomeStyles";
import GoogleAutocompleteInput from "screens/Booking/components/GoogleAutocompleteInput ";
import { useRouter } from "next/router";

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
interface Location {
  type: "address" | "airport";
  address: string;
}

interface FormData {
  pickups: Location[];
  dropoffs: Location[];
}

const BannerSection = () => {
  const theme = useTheme();
  const router = useRouter();
  const classes = HomeStyles(theme);
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  const [formData, setFormData] = useState<FormData>({
    pickups: [{ type: "address", address: "" }],
    dropoffs: [{ type: "address", address: "" }],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (
    field: "pickups" | "dropoffs",
    type: "address" | "airport"
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [{ type, address: "" }],
    }));
  };

  const handleFieldChange = (field: "pickups" | "dropoffs", value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [{ ...prev[field][0], address: value }],
    }));
  };

  const handleSubmit = () => {
    setIsLoading(true);
    router.push({
      pathname: "/booking",
      query: { data: JSON.stringify(formData) },
    });
  };

  return (
    <Box sx={classes.bgBox}>
      <Container maxWidth="lg">
        <Stack direction={lgUp ? "row" : "column"} spacing={lgUp ? 10 : 1}>
          <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            spacing={3}
          >
            <Box textAlign="center">
              <Typography sx={classes.experiFont} variant="h6">
                <img
                  src={whiteStar.src}
                  height={lgUp ? 20 : 13}
                  width={lgUp ? 20 : 13}
                  style={{ position: "relative", bottom: 3 }}
                />
                <span>Experi</span>
                <span style={{ color: theme.palette.primary.main }}>ence</span>
              </Typography>
              <Typography sx={classes.experiFont} variant="h6">
                the Ultim
                <span style={{ color: theme.palette.primary.main }}>
                  ate Luxury
                </span>
                <img
                  src={goldStar.src}
                  height={lgUp ? 20 : 13}
                  width={lgUp ? 20 : 13}
                  style={{ position: "relative", top: 3 }}
                />
              </Typography>
            </Box>
            <img
              src={SClassCar.src}
              alt="S-Class Car"
              width={lgUp ? "auto" : "100%"}
            />
          </Stack>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Box sx={classes.contactBox}>
              <Stack direction="column" spacing={3}>

              {["pickups", "dropoffs"].map((field) => (
                <Stack key={field} spacing={2}>
                  <Stack direction="row" spacing={2} >
                    <Typography
                      variant="body2"
                      sx={
                        formData[field as "pickups" | "dropoffs"][0].type ===
                        "address"
                          ? classes.addressBox
                          : classes.pickupBox
                      }
                      onClick={() =>
                        handleTabChange(
                          field as "pickups" | "dropoffs",
                          "address"
                        )
                      }
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={
                        formData[field as "pickups" | "dropoffs"][0].type ===
                        "airport"
                          ? classes.addressBox
                          : classes.pickupBox
                      }
                      onClick={() =>
                        handleTabChange(
                          field as "pickups" | "dropoffs",
                          "airport"
                        )
                      }
                    >
                      Airport
                    </Typography>
                  </Stack>
                  {formData[field as "pickups" | "dropoffs"][0].type ===
                  "address" ? (
                    <GoogleAutocompleteInput
                      value={
                        formData[field as "pickups" | "dropoffs"][0].address
                      }
                      onChange={(value) =>
                        handleFieldChange(
                          field as "pickups" | "dropoffs",
                          value
                        )
                      }
                    />
                  ) : (
                    <Select
                      placeholder="Select airport"
                      id="address"
                      name="address"
                      value={
                        formData[field as "pickups" | "dropoffs"][0].address
                      }
                      onChange={(e) =>
                        handleFieldChange(
                          field as "pickups" | "dropoffs",
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
                        color: formData[field as "pickups" | "dropoffs"][0].address === "" ? "#B3B3B3" : "",
                        width: "100%",
                        background: "transparent",
                        borderRadius: "25px",
                      }}
                      renderValue={
                        formData[field as "pickups" | "dropoffs"][0].address !== ""
                          ? () => formData[field as "pickups" | "dropoffs"][0].address
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
                </Stack>
              ))}
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress size="1.5rem" /> : "Book Now"}
              </Button>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default BannerSection;
