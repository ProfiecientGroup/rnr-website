import React from "react";
import { useTheme } from "@mui/material";
import urls from "global/constants/urls";
import BannerSection from "./Components/BannerSection";
import ServicesStyles from "./ServicesStyles";
import FixPriceSection from "./Components/FixPriceSection";
import PricingHourSection from "./Components/PricingHours";
import AirportTransferSection from "./Components/AirportTransfer";

const Home = () => {

  return (
    <>
      <BannerSection />
      <FixPriceSection />
      <PricingHourSection />
      <AirportTransferSection />
    </>
  );
};

export default Home;
