import { Theme } from "@mui/material";
import journeyDetailsBg from "../../assets/images/booking/journeyDetailsBg.webp";
import chooseACarBg from "../../assets/images/booking/chooseACarBg.webp";
import BookingBg from "../../assets/images/booking/BookingBg.webp";

const BookingStyles = (theme: Theme) => {
  return {
    bgBox: {
      background: "url(" + BookingBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundColor: theme.palette.primary.darkest,
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    experiFont: {
      fontFamily: "Kugile",
      fontSize: "60px",
      fontWeight: "400",
      textAlign: "center",
      lineHeight: "90px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "25px",
        lineHeight: "40px",
      },
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
    journeyDetailsBg: {
      background: "url(" + chooseACarBg.src + ")",
      backgroundSize: "cover",
      // backgroundPosition: "center",
      // borderRadius:"16px",

      // backgroundColor: theme.palette.primary.darkest,
      width: "50vw",
      height: "auto",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      padding: 3,
      borderRadius: "18px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    bookingDetailsBg: {
      background: "url(" + chooseACarBg.src + ")",
      backgroundSize: "cover",
      // backgroundPosition: "center",
      // borderRadius:"16px",

      // backgroundColor: theme.palette.primary.darkest,
      width: "50vw",
      height: "auto",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      padding: 3,
      borderRadius: "18px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    textInputField: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px",
        fontSize: 20,
        color: "#fff  !important",
        paddingRight: "10px !important",

      },
      "& input:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 100px #1a1a1a inset !important",
        WebkitTextFillColor: "#fff !important",
        borderRadius: "inherit",
      },
      "& .MuiAutocomplete-inputRoot ": {
        paddingRight: "10px !important",
      },
      // backgroundColor: "transparent",
      // borderRadius: "100px",
      width: "100%",
      // // maxWidth: "400px",
      // border: "1px solid #655737",
      // "& .MuiOutlinedInput-root:hover": {
      //   backgroundColor: "transparent",
      // },
      // "& .MuiOutlinedInput-input": {
      //   backgroundColor: "transparent",
      //   padding: "12px 12px",

      //   borderRadius: "100px",
      //   color: "#FFFFFF",
      // },
      // "& .MuiInputBase-input": {
      //   border: "1px solid #101010",
      // },
      // "& .MuiOutlinedInput-root": {
      //   paddingRight: 0,
      //   "& fieldset": {
      //     borderColor: "transparent",
      //     borderTopLeftRadius: "100px",
      //     borderBottomLeftRadius: "100px",
      //     borderTopRightRadius: "100px",
      //     borderBottomRightRadius: "100px",
      //   },
      // },
    },
    selectInputField: {
      backgroundColor: "transparent",
      borderRadius: "100px",
      width: "100%",
      maxWidth: "auto",
      border: "1px solid #655737",
      "& .MuiOutlinedInput-root:hover": {
        backgroundColor: "transparent",
      },
      "& .MuiInputBase-input": {
        backgroundColor: "transparent",
        padding: "10px 10px",
        borderRadius: "100px",
        border: "1px solid #101010",
        color: "#FFFFFF",
      },
      "& .MuiOutlinedInput-root": {
        paddingRight: 0,
        "& fieldset": {
          borderColor: "transparent",
          border: "1px solid transparent",
          borderRadius: "100px",
        },
      },
      "&.MuiOutlinedInput-root.Mui-focused": {
        // borderColor: "#101010", // Uncomment if you want to change the border color on focus
      },
    },
    chooseACarBg: {
      background: "url(" + chooseACarBg.src + ")",
      backgroundSize: "cover",
      // backgroundPosition: "center",
      // backgroundColor: theme.palette.primary.darkest,
      width: "50vw",
      height: "auto",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      padding: 3,
      borderRadius: "18px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    paymentBg: {
      background: "url(" + journeyDetailsBg.src + ")",
      backgroundSize: "cover",
      // backgroundPosition: "center",
      // borderRadius:"16px",

      // backgroundColor: theme.palette.primary.darkest,
      width: "50vw",
      height: "auto",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      padding: 3,
      borderRadius: "18px",
      [theme.breakpoints.down("md")]: {
        width: "auto",
      },
    },
    selectMenu: {
      width: "100%",
      borderRadius: "25px",
      border: "0.5px solid #DDB863",
      "& .MuiInputBase-root": {
        borderRadius: "25px",
        border: "0.5px solid #DDB863",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#DDB863",
          borderRadius: "25px",
          border: "0.5px solid #DDB863",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#DDB863",
          borderRadius: "25px",
          border: "0.5px solid #DDB863",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#DDB863",
          borderRadius: "25px",
          border: "0.5px solid #DDB863",
        },
      },
      "& .MuiSelect-select": {
        borderRadius: "25px !important",
        border: "0.5px solid #DDB863",
      },
      "& .MuiInputBase-input": {
        borderRadius: "25px",
        padding: "12px 12px",
        background: "transparent",
        border: "0.5px solid #DDB863",
      },
      "& .MuiMenu-paper": {
        background: "transparent",
        borderRadius: "25px",
        border: "0.5px solid #DDB863",
      },
    },
    optionStyle: {
      // fontFamily: "Kugile",
      fontSize: "16px",
      fontWeight: "400",
      textAlign: "center",
      backgroundColor: "#111927",
      "&:hover": {
        backgroundColor: "#1D2230",
      },
      color: "#FFFFFF",
      borderRadius: "25px",
    },
    menuItems: {
      backgroundColor: "#111927",
      color: "#B3B3B3",
      borderRadius: "25px",
      boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.08)",
      maxHeight: "calc(100% - 96px)",
      overflowY: "auto",
      overflowX: "hidden",
      outline: 0,
    },
    timePicker: {
      width: "100%",
      paddingTop: "12px",
      borderRadius: "25px !important",
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px !important",
        backgroundColor: "transparent",
      },
      "& .MuiOutlinedInput-input": {
        padding: "8.5px 14px",
        paddingRight: "1px",
        borderColor: "#DDB863",
        borderRadius: "25px !important",
      },
      "& .MuiInputAdornment-root": {
        marginLeft: "0px",
      },
      "& .MuiSvgIcon-root": {
        height: "20px",
        width: "20px",
        color: "#DDB863",
      },
      "& .MuiFilledInput-input": {
        py: "16px",
        borderColor: "#DDB863",
        borderRadius: "25px !important",
      },
      backgroundColor: "transparent",
      "& .css-zpr72u-MuiInputBase-root-MuiFilledInput-root": {
        borderRadius: "25px !important",
        // padding: 1,
      },
      "& .MuiButtonBase-root-MuiButton-root": {
        color: "#fff",
      },
    },
  };
};

export default BookingStyles;
