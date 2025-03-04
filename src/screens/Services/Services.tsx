import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import urls from "global/constants/urls";
import BannerSection from "./Components/BannerSection";
import ServicesStyles from "./ServicesStyles";
import FixPriceSection from "./Components/FixPriceSection";
import PricingHourSection from "./Components/PricingHours";
import AirportTransferSection from "./Components/AirportTransfer";

const Home = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box mt={lgUp ? 6 : 2}>
      <BannerSection />
      <FixPriceSection />
      <PricingHourSection />
      <AirportTransferSection />
    </Box>
  );
};

export default Home;
