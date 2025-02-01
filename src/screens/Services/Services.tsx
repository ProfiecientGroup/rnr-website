import React from "react";
import { useTheme } from "@mui/material";
import urls from "global/constants/urls";
import BannerSection from "./Components/BannerSection";
import ServicesStyles from "./ServicesStyles";
import FixPriceSection from "./Components/FixPriceSection";

const Home = () => {
  const theme = useTheme();
  const classes = ServicesStyles(theme);

  const getBannerSection = () => {
    return <BannerSection />;
  };

  return (
    <>
      {getBannerSection()}
      <FixPriceSection />
    </>
  );
};

export default Home;
