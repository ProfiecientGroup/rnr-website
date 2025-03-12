import { useTheme, useMediaQuery } from "@mui/material";
import bannerCar from "../../assets/images/cars/carBanner.webp";
import HomeStyles from "screens/Home/HomeStyles";
import CarsTestimonialSection from "./Components/CarsTestimonial";
import scar1 from "../../assets/images/cars/sCar1.webp";
import scar2 from "../../assets/images/cars/sCar2.webp";
import scar3 from "../../assets/images/cars/sCar3.webp";
import vcar1 from "../../assets/images/cars/vCar1.webp";
import vcar2 from "../../assets/images/cars/vCar2.webp";
import vcar3 from "../../assets/images/cars/vCar3.webp";
import ecar1 from "../../assets/images/cars/eCar1.webp";
import ecar2 from "../../assets/images/cars/eCar2.webp";
import ecar3 from "../../assets/images/cars/eCar3.webp";
import icon1 from "../../assets/images/cars/icon1.svg";
import icon2 from "../../assets/images/cars/icon2.svg";
import icon3 from "../../assets/images/cars/icon3.svg";
import icon4 from "../../assets/images/cars/icon4.svg";

const carTestimonialData = [
  {
    carsImages: [{ img: scar1.src }, { img: scar2.src }, { img: scar3.src }],
    title: "Mercedes S-Class",
    des: "The Mercedes S-Class blends sophistication and practicality. With seating for three, it provides a comfortable travel experience, complemented by complimentary Wi-Fi. Ideal for those who appreciate a touch of luxury in a compact setting.",
    keyFeatures: [
      {
        icon: icon1.src,
        name: "4 Passengers",
      },
      {
        icon: icon2.src,
        name: "2 Suitcases",
      },
      {
        icon: icon3.src,
        name: "Hybrid Available",
      },
      {
        icon: icon4.src,
        name: "Onboard Wi-Fi",
      },
    ],
    ratings: [
      { price: "£40", title: "Hourly rate (minimum 3 hours)" },
      { price: "£600", title: "Day rate (8 hours)" },
      { price: "", title: "Prices subject to VAT" },
      { price: "", title: "", btn: true },
    ],
  },
  {
    carsImages: [{ img: vcar1.src }, { img: vcar2.src }, { img: vcar3.src }],
    title: "Mercedes V-Class",
    des: "The Mercedes S-Class blends sophistication and practicality. With seating for three, it provides a comfortable travel experience, complemented by complimentary Wi-Fi. Ideal for those who appreciate a touch of luxury in a compact setting.",
    keyFeatures: [
      {
        icon: icon1.src,
        name: "6/7 Passengers",
      },
      {
        icon: icon2.src,
        name: "8 Suitcases",
      },
      {
        icon: icon3.src,
        name: "Electric option",
      },
      {
        icon: icon4.src,
        name: "Onboard Wi-Fi",
      },
    ],
    ratings: [
      { price: "£40", title: "Hourly rate (minimum 3 hours)" },
      { price: "£600", title: "Day rate (8 hours)" },
      { price: "", title: "Prices subject to VAT" },
      { price: "", title: "", btn: true },
    ],
  },
  {
    carsImages: [{ img: ecar1.src }, { img: ecar2.src }, { img: ecar3.src }],
    title: "Mercedes E-Class",
    des: "The Mercedes S-Class blends sophistication and practicality. With seating for three, it provides a comfortable travel experience, complemented by complimentary Wi-Fi. Ideal for those who appreciate a touch of luxury in a compact setting.",
    keyFeatures: [
      {
        icon: icon1.src,
        name: "4 Passengers",
      },
      {
        icon: icon2.src,
        name: "2 Small cases",
      },
      {
        icon: icon3.src,
        name: "2 Bags",
      },
      {
        icon: icon4.src,
        name: "Onboard Wi-Fi",
      },
    ],
    ratings: [
      { price: "£30", title: "Hourly rate (minimum 3 hours)" },
      { price: "£600", title: "Hourly rate (minimum 3 hours)" },
      { price: "", title: "Prices subject to VAT" },
      { price: "", title: "", btn: true },
    ],
  },
];

const CarsComponent = () => {
  const theme = useTheme();
  const classes = HomeStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <img src={bannerCar.src} />
      {/* <CarsBannerSection /> */}
      <CarsTestimonialSection carTestimonialData={carTestimonialData} />
    </>
  );
};
export default CarsComponent;
