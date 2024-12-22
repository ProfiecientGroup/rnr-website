import { Theme } from "@mui/material";
import Bg from "../../assets/images/home/Bg.svg";
// import checksbg from "assets/images/home/features-checks-bg.png";

const HomeStyles = (theme: Theme) => {
  return {
    bgBox: {
      background: "url(" + Bg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor:theme.palette.primary.dark,
      width:"100%",
      height:"60vh",
      // paddingTop: "200px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    templateBox: {
      paddingTop: "80px",
      paddingBottom: "80px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background:
        "linear-gradient(180deg, rgba(172, 199, 55, 0.14) 0%, #F1F5F9 100%)",
      "@keyframes scroll-left": {
        "0%": {
          transform: "translate(0%)",
        },
        "100%": {
          transform: "translate(-100%)",
        },
      },
      "@keyframes scroll-right": {
        "0%": {
          transform: "translate(-100%)",
        },
        "100%": {
          transform: " translate(0%)",
        },
      },
    },
    pricingBox: {
      my: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    pricingDetails: {
      boxShadow: "0px 2px 12px 0px #14142B14",
      border: "1px solid #EFF0F6",
      borderRadius: "20px",
      width: "100%",
    },
    checksBg: {
      // background: "url(" + checksbg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "150px",
      paddingBottom: "40px",
    },
    darkColored: {
      color: theme.palette.primary.darkest,
    },
    borderedTextBox: {
      display: "inline-block",
      color: theme.palette.primary.darkest,
      backgroundColor: theme.palette.primary.contrastText,
      border: "1px solid #D3D3D3",
      borderRadius: "5px",
      fontWeight: 600,
      padding: 0,
      width: "fit-content",
      transition: "transform 0.3s ease",
      "&:hover": {
        backgroundColor: theme.palette.primary.contrastText,
        backgroundClip: "content-box, border-box",
        backgroundImage: `linear-gradient(${theme.palette.primary.contrastText}, ${theme.palette.primary.contrastText}), linear-gradient(180deg, #FFC663 0%, #FF34A1 56%, #346CFA 100%)`,
        backgroundOrigin: "border-box",
        border: "double 2px transparent",
        transition: "transform 0.3s ease",
        transform: "rotate(-3deg)",
      },
    },
    tiltOnScroll: {
      transition: "transform 1s ease",
      transform: "perspective(1000px) rotateX(0deg)",
      marginTop: "-125px",
    },
    tilted: {
      transition: "transform 1s ease",
      transform: "perspective(1000px) rotateX(-15deg)" /* Tilt on scroll */,
      marginTop: "-125px",
    },
    greyBox: {
      backgroundColor: theme.palette.primary.dark,
      backdropFilter: "blur(22px)",
      paddingBottom: "80px",
    },
    whiteText: {
      color: theme.palette.primary.contrastText,
    },
    boldWhiteText: {
      color: theme.palette.primary.contrastText,
      fontSize: "28px !important",
      fontWeight: 600,
      marginTop: "40px",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("lg")]: {
        fontSize: "20px !important",
      },
    },
    boldText: {
      color: theme.palette.primary.main,
      fontSize: "28px !important",
      fontWeight: 600,
      marginTop: "40px",
      display: "flex",
      justifyContent: "center",
    },
    featuresDataLeftScrolling: {
      display: "flex",
      animation: "scroll-right 7s linear infinite",
      whiteSpace: "nowrap",
    },
    featuresDataRightScrolling: {
      display: "flex",
      animation: "scroll-left 7s linear infinite",
      whiteSpace: "nowrap",
    },
  };
};

export default HomeStyles;
