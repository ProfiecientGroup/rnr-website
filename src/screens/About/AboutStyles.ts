import { Theme } from "@mui/material";
import aboutBanner from "../../assets/images/about/aboutBanner.png";
import outStoryBg from "../../assets/images/home/aboutBg.webp";
import leadershipBg from "../../assets/images/about/leadershipBg.webp";

const AbouStyles = (theme: Theme) => {
  return {
    bgBox: {
      background: "url(" + aboutBanner.src + ")",
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    ourStoryBox: {
      background: "url(" + outStoryBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "100vh",
      // padding: "50px 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      },
    },
    textBox: {
      backgroundColor: "#1A1A1A",
      borderRadius: "60px",
      padding: "35px",
      width: "600px",
      height:"auto",
      position: "relative",
        bottom: "200px",
        right: "140px",
      [theme.breakpoints.down("md")]: {
        position: "relative",
        bottom: "0px",
        right: "0px",
        width: "auto",
      },
    },
    ourStoryFont: {
      fontFamily: "Kugile",
      fontSize: "42px",
      fontWeight: "400",
      // textAlign: "start",
      lineHeight: "63px",
      color: "#DDB863",
    },
    carImage: {},
    content: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#fff",
    },

    leadershipBox: {
      background: "url(" + leadershipBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "auto",
      paddingTop: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    experiFont: {
      fontFamily: "Kugile",
      fontSize: "42px",
      fontWeight: "400",
      textAlign: "center",
      lineHeight: "63px",
    },
    verticalLine: {
      background: "#DDB863",
      width: "1px",
      height: "50px",
      opacity: "0px",
    },
    addressBox: {
      width: "Fill (167px)px",
      height: "Fixed (60px)px",
      padding: "10px 30px 10px 30px",
      borderRadius: "25px",
      opacity: "0px",
      border: "1px solid #DDB863 ",
      color: "#DDB863",
      backgroundColor: "#DDB8631A",
    },
  };
};

export default AbouStyles;
