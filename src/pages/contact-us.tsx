import type { NextPage } from "next";
import Head from "next/head";
import ContactUsComponent from "../screens/ContactUs/ContactUs";

const ContactUs: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <link rel="canonical" href="https://rnr.com/" />
      </Head>
    );
  };

  const getContactUsComponent = () => {
    return <ContactUsComponent />;
  };

  return (
    <>
      {getHeader()}
      {getContactUsComponent()}
    </>
  );
};

export default ContactUs;
