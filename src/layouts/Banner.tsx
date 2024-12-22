import { Box } from "@mui/material";
import React, { JSX } from "react";

interface CustomProps {
  children: JSX.Element;
}
const Banner = (props: CustomProps) => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      {props.children}
    </Box>
  );
};

export default Banner;
