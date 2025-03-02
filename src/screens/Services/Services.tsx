import React from "react";
import { Box, useTheme } from "@mui/material";
import urls from "global/constants/urls";
import BannerSection from "./Components/BannerSection";
import ServicesStyles from "./ServicesStyles";
import FixPriceSection from "./Components/FixPriceSection";
import PricingHourSection from "./Components/PricingHours";
import AirportTransferSection from "./Components/AirportTransfer";

const Home = () => {

  return (
    <Box mt={6}>
      <BannerSection />
      <FixPriceSection />
      <PricingHourSection />
      <AirportTransferSection />
    </Box>
  );
};

export default Home;
