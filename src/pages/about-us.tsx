import type { NextPage } from "next";
import Head from "next/head";
import AboutComponent from "../screens/About/About";

const About: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <link rel="canonical" href="https://rnr.com/" />
       
      </Head>
    );
  };

  const getAboutComponent = () => {
    return <AboutComponent />;
  };

  return (
    <>
      {getHeader()}
      {getAboutComponent()}
    </>
  );
};

export default About;
