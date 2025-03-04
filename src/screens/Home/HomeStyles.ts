import { Theme } from "@mui/material";
import aboutBg from "../../assets/images/home/about-bg.webp";
import Bg from "../../assets/images/home/Bg.svg";
import bannerAddressBg from "../../assets/images/home/banner-address-bg.webp";
import chooseOurCar from "../../assets/images/home/OurServicesCarBg.webp";
import whatAreWaitingBox from "../../assets/images/home/whatAreWaitingBg.webp";

const HomeStyles = (theme: Theme) => {
  return {
    bgBox: {
      background: "url(" + Bg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "80vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        height: "auto",
      },
    },
    experiFont: {
      fontFamily: "Kugile",
      fontSize: "48px",
      fontWeight: "400",
      textAlign: "center",
      lineHeight: "63px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "28px",
        lineHeight: "40px",
      },
    },
    contactBox: {
      width: "414px",
      height: "480px",
      borderRadius: "50px",
      backgroundColor: "#0E0E0E",
      padding: 4,
      background: "url(" + bannerAddressBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      [theme.breakpoints.down("sm")]: {
        width: "auto",
      },
    },
    chooseOurCarBox: {
      width: "100%",
      height: "auto",
      backgroundColor: "#0E0E0E",
      // padding: 4,
      background: "url(" + chooseOurCar.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    whatAreWaitingBox: {
      width: "100%",
      height: "auto",
      backgroundColor: "#0E0E0E",
      padding: 4,
      background: "url(" + whatAreWaitingBox.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
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
    pickupBox: {
      width: "Fill (167px)px",
      height: "Fixed (60px)px",
      padding: "10px 30px 10px 30px",
      borderRadius: "25px",
      opacity: "0px",
      color: "#B3B3B3",
      backgroundColor: "#1A1A1A",
    },
    verticalLine: {
      background: "#DDB863",
      width: "1px",
      height: "50px",
      opacity: "0px",
    },
    textInputField: {
      backgroundColor: "transparent",
      borderRadius: "100px",
      width: "100%",
      maxWidth: "400px",
      border: "1px solid #655737",
      "&.MuiTextField-root .MuiOutlinedInput-root:hover": {
        backgroundColor: "transparent",
      },
      "& .css-ovna53-MuiInputBase-input-MuiOutlinedInput-input": {
        backgroundColor: "transparent",
        padding: "10px 10px",
        borderRadius: "100px",
      },
      "& .css-fayl5t-MuiInputBase-input-MuiOutlinedInput-input": {
        backgroundColor: "transparent",
        color: "#FFFFFF",
      },
      "& .MuiInputBase-input": {
        border: "1px solid #101010",
      },
      "& .MuiOutlinedInput-root": {
        paddingRight: 0,
        "& fieldset": {
          borderColor: "transparent",
          border: "100px",
          borderTopLeftRadius: "100px",
          borderBottomLeftRadius: "100px",
          borderTopRightRadius: "100px",
          borderBottomRightRadius: "100px",
        },
      },
    },
    aboutBgBox: {
      // background: "url(" + aboutBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
};

export default HomeStyles;
