import { Theme } from "@mui/material";
import journeyDetailsBg from "../../assets/images/booking/journeyDetailsBg.webp";
import chooseACarBg from "../../assets/images/booking/chooseACarBg.webp";
import aboutBg from "../../assets/images/home//aboutBg.webp";

const BookingStyles = (theme: Theme) => {
  return {
    bgBox: {
      background: "url(" + aboutBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
      fontSize: "60px",
      fontWeight: "400",
      textAlign: "center",
      lineHeight: "90px",
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
      background: "url(" + journeyDetailsBg.src + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // backgroundColor: theme.palette.primary.darkest,
      width: "50vw",
      height: "auto",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      padding: 3,
      borderRadius: "18px",
    },
    textInputField: {
      backgroundColor: "transparent",
      borderRadius: "100px",
      width: "100%",
      // maxWidth: "400px",
      border: "1px solid #655737",
      "& .MuiOutlinedInput-root:hover": {
        backgroundColor: "transparent",
      },
      "& .MuiOutlinedInput-input": {
        backgroundColor: "transparent",
        padding: "10px 10px",
        borderRadius: "100px",
        color: "#FFFFFF",
      },
      "& .MuiInputBase-input": {
        border: "1px solid #101010",
      },
      "& .MuiOutlinedInput-root": {
        paddingRight: 0,
        "& fieldset": {
          borderColor: "transparent",
          borderTopLeftRadius: "100px",
          borderBottomLeftRadius: "100px",
          borderTopRightRadius: "100px",
          borderBottomRightRadius: "100px",
        },
      },
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
      backgroundPosition: "center",
      // backgroundColor: theme.palette.primary.darkest,
      width: "50vw",
      height: "auto",
      // display: "flex",
      // justifyContent: "center",
      // alignItems: "center",
      padding: 3,
      borderRadius: "18px",
    },
    selectMenu: {
      width: "100%",
      borderRadius: "25px",
      "& .MuiInputBase-root": {
        borderRadius: "25px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#DDB863",
          borderRadius: "25px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#DDB863",
          borderRadius: "25px",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#DDB863",
          borderRadius: "25px",
        },
      },
      "& .MuiSelect-select": {
        borderRadius: "25px !important",
      },
      "& .MuiInputBase-input": {
        borderRadius: "25px",
        padding: "12px 12px",
        background: "transparent",
      },
      "& .MuiMenu-paper": {
        background: "transparent",
        borderRadius: "25px",
      },
    },
    optionStyle: {
      fontFamily: "Kugile",
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
      paddingTop: "12px",
      borderRadius: "25px",
      "& .MuiOutlinedInput-root": {
        borderRadius: "25px",
        backgroundColor: "transparent",
      },
      "& .MuiOutlinedInput-input": {
        padding: "8.5px 14px",
        paddingRight: "1px",
        borderColor: "#DDB863",
        borderRadius: "25px",
      },
      "& .MuiInputAdornment-root": {
        marginLeft: "0px",
      },
      "& .MuiSvgIcon-root": {
        height: "15px",
        width: "15px",
      },
      "& .MuiFilledInput-input": {
        paddingTop: "12px",
        borderColor: "#DDB863",
        borderRadius: "25px",
      },
      backgroundColor: "transparent",
      "& .css-4fgus2-MuiInputBase-root-MuiFilledInput-root": {
        borderRadius: "25px !important",
      },
    },
  };
};

export default BookingStyles;
