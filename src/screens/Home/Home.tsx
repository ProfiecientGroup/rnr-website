import React from "react";
import { useTheme } from "@mui/material";
import urls from "global/constants/urls";
import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import HomeStyles from "./HomeStyles";
import ChooseOurCarSection from "./components/ChooseOurCarSection";
import WhatAreWaitingSection from "./components/WhatAreWaitingSection";
import Testimonial from "./components/Testimonial";

const testimonial = [
  {
    label: "Carousel 1",
    subTitle: "Advantage Resourcing (Massachusetts, USA)",
    des: "“I would like to commend your team and organization for the excellent job done in providing temporary staffing service on an urgent basis. The temporary workers did a great job, and we could sustain the project for the required time.“",
    title: "Ms. Oliver",
  },
  {
    label: "Carousel 2",
    subTitle: "Co founder of a startup (San Francisco, USA)",
    title: "N. Milton",
    des: "“Your cyber security services have proven to be the backbone of our business, protecting its core against all the security threats that have become common in the current days. We are able to operate efficiently, and it's all thanks to your proactive team.“",
  },
  {
    label: "Carousel 3",
    title: "Jim",
    subTitle: "Director at credit card company, (Virginia, USA)",
    des: "“We started a new business and were looking for a cost-effective website design and development services that could provide us with the quality work. SoftSages turned out to be the right choice for our purpose.“",
  },
  {
    label: "Carousel 4",
    title: "P. Jonas",
    subTitle: "Doctor At Hospital ( PA, USA )",
    des: "“I would like to express my appreciation for your staffing service as we could get an experienced team on an important client project within the proposed time.“",
  },
  {
    label: "Carousel 5",
    title: "Rikesh",
    subTitle: "Owner of small business (NJ, USA)",
    des: "“Our organization has been using your Work360 software for the past two years, and we are glad to opt for it. Our candidate data management process has become much easier and more feasible to track.“",
  },
];

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
      <Testimonial testimonialData={testimonial} />
      {getWhatAreWaitingSection()}
    </>
  );
};

export default Home;
