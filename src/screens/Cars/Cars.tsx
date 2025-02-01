import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import bannerCar from "../../assets/images/cars/bannerCar.webp";
import HomeStyles from "screens/Home/HomeStyles";
import CarsBannerSection from "./Components/CarBannerSection";
import CarsTestimonialSection from "./Components/CarsTestimonial";
import car1 from "../../assets/images/cars/car1.png";
import icon1 from "../../assets/images/cars/icon1.svg";
import icon2 from "../../assets/images/cars/icon2.svg";
import icon3 from "../../assets/images/cars/icon3.svg";
import icon4 from "../../assets/images/cars/icon4.svg";

const carTestimonialData = [
  {
    carsImages: [
      { img: car1.src ,text:"1"},
      { img: car1.src,text:"2" },
      { img: car1.src,text:"3" },
      { img: car1.src,text:"4" },
      { img: car1.src,text:"5" },
    ],
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
      { price: "£75", title: "Hourly rate (minimum 3 hours)" },
      { price: "£600", title: "Hourly rate (minimum 3 hours)" },
      { price: "", title: "Prices subject to VAT" },
      { price: "", title: "" ,btn:true},
    ],
  },
  {
    carsImages: [
      { img: car1.src ,text:"1"},
      { img: car1.src,text:"2" },
      { img: car1.src,text:"3" },
      { img: car1.src,text:"4" },
      { img: car1.src,text:"5" },
    ],
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
      { price: "£75", title: "Hourly rate (minimum 3 hours)" },
      { price: "£600", title: "Hourly rate (minimum 3 hours)" },
      { price: "", title: "Prices subject to VAT" },
      { price: "", title: "" ,btn:true},
    ],
  },
  {
    carsImages: [
      { img: car1.src ,text:"1"},
      { img: car1.src,text:"2" },
      { img: car1.src,text:"3" },
      { img: car1.src,text:"4" },
      { img: car1.src,text:"5" },
    ],
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
      { price: "£75", title: "Hourly rate (minimum 3 hours)" },
      { price: "£600", title: "Hourly rate (minimum 3 hours)" },
      { price: "", title: "Prices subject to VAT" },
      { price: "", title: "" ,btn:true},
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
      <CarsBannerSection />
      <CarsTestimonialSection carTestimonialData={carTestimonialData} />
    </>
  );
};
export default CarsComponent;
