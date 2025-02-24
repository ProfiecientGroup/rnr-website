import { Theme } from "@mui/material";
import aboutBg from "../../assets/images/home/about-bg.webp";
import servicesBg from "../../assets/images/services/servicesBg.webp";
import servicesBg2 from "../../assets/images/services/serviceBg2.webp";

const ServicesStyles = (theme: Theme) => {
  return {
    bgBox: {
      background: "url(" + servicesBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    bgBox1: {
      background: "url(" + servicesBg2.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "auto",
      paddingTop: "180px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        paddingTop: "50px",
      },
    },
    kugileFont: {
      fontFamily: "Kugile",
      fontSize: "42px",
      fontWeight: "400",
      //   lineHeight: "63px",
    },
  };
};

export default ServicesStyles;
