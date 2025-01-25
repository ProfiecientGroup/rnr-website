import React from "react";
import { useTheme } from "@mui/material";
import urls from "global/constants/urls";
import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import HomeStyles from "./HomeStyles";
import ChooseOurCarSection from "./components/ChooseOurCarSection";
import WhatAreWaitingSection from "./components/WhatAreWaitingSection";

const Home = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);

  const getBannerSection = () => {
    return <BannerSection />;
  };
  const getAboutSection = () => {
    return <AboutSection />;
  };
  const getChooseOurCarSection = () => {
    return <ChooseOurCarSection />;
  };
  const getWhatAreWaitingSection = () => {
    return <WhatAreWaitingSection />;
  };
  return (
    <>
      {getBannerSection()}
      {getAboutSection()}
      {getChooseOurCarSection()}
      {getWhatAreWaitingSection()}
    </>
  );
};

export default Home;
