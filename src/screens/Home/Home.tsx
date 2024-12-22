import React from "react";
import { useTheme } from "@mui/material";
// import HomeStyles from "./HomeStyles";
import urls from "global/constants/urls";
import BannerSection from "./components/BannerSection";

const Home = () => {
  const theme = useTheme();
//   const classes = HomeStyles(theme);

  const getHeroSection = () => {
    return <BannerSection />;
  };

  return (
    <>
      {getHeroSection()}
    </>
  );
};

export default Home;
