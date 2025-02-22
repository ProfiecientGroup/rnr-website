import { Theme } from "@mui/material";
import aboutBanner from "../../assets/images/about/aboutBanner.png";
import outStoryBg from "../../assets/images/home/aboutBg.webp";
import leadershipBg from "../../assets/images/about/leadershipBg.webp";
import contactBannerBg from "../../assets/images/contactUs/contactBannerBg.webp";
import carImage from "../../assets/images/contactUs/carImage.webp";

const ContactUsStyles = (theme: Theme) => {
  return {
    bgBox: {
      background: "url(" + contactBannerBg.src + ")",
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
    carImages: {
      background: "url(" + carImage.src + ")",
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
      height: "40vh",
      backgroundSize: "contain",
      },
    },
    textBox: {
      backgroundColor: "#1A1A1A",
      borderRadius: "10px",
      padding: "20px",
      width: "500px",
      position: "relative",
      bottom: "100px",
      right: "68px",
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
      height: "100vh",
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
    textInputField: {
      // border: "1px solid #655737",
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px",
        fontSize: 20,
        color: "#fff  !important",
      },
      "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #1a1a1a inset !important",
        WebkitTextFillColor: "#fff !important",
        borderRadius: "inherit",
      },
    },
  };
};

export default ContactUsStyles;
