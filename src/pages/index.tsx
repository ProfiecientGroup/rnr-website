import type { NextPage } from "next";
import Head from "next/head";
import HomeComponent from "../screens/Home/Home";

const Home: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <link rel="canonical" href="https://rnr.com/" />
       
      </Head>
    );
  };

  const getHomeComponent = () => {
    return <HomeComponent />;
  };

  return (
    <>
      {getHeader()}
      {getHomeComponent()}
    </>
  );
};

export default Home;
