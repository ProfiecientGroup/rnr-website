import type { NextPage } from "next";
import Head from "next/head";
import ServicesComponent from "screens/Services/Services";

const Services: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <link rel="canonical" href="https://rnr.com/" />
      </Head>
    );
  };

  const getServicesComponent = () => {
    return <ServicesComponent />;
  };

  return (
    <>
      {getHeader()}
      {getServicesComponent()}
    </>
  );
};

export default Services;
