import type { NextPage } from "next";
import Head from "next/head";
import CarsComponent from "screens/Cars/Cars";

const Cars: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <link rel="canonical" href="https://rnr.com/" />
      </Head>
    );
  };

  const getCarsComponent = () => {
    return <CarsComponent />;
  };

  return (
    <>
      {getHeader()}
      {getCarsComponent()}
    </>
  );
};

export default Cars;
