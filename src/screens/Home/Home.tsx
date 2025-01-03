import React from "react";
import { useTheme } from "@mui/material";
import urls from "global/constants/urls";
import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import HomeStyles from "./HomeStyles";

const Home = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);

  const getBannerSection = () => {
    return <BannerSection />;
  };
  const getAboutSection = () => {
    return <AboutSection />;
  };

  return (
    <>
      {getBannerSection()}
      {getAboutSection()}
    </>
  );
};

export default Home;
