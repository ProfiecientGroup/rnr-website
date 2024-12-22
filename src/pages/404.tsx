import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  const getHeader = () => {
    return (
      <Head>
        <title>404 Page not found - rnr</title>
        <meta name="title" content="404 Page not found - rnr" />
        <meta name="description" content="Page not found - rnr" />
      </Head>
    );
  };

  const get404Component = () => {
    return (
      <Typography>Oops....</Typography>
    )
  };

  return (
    <>
      {getHeader()}
      {get404Component()}
    </>
  );
};

export default Custom404;
