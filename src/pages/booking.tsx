import type { NextPage } from "next";
import Head from "next/head";
import BookingComponent from "../screens/Booking/Booking";

const Home: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <link rel="canonical" href="https://rnr.com/" />
      </Head>
    );
  };

  const getBookingComponent = () => {
    return <BookingComponent />;
  };

  return (
    <>
      {getHeader()}
      {getBookingComponent()}
    </>
  );
};

export default Home;
