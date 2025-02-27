import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ServicesStyles from "../ServicesStyles";
import viewpaths from "global/constants/viewPathConstants";
import car1 from "../../../assets/images/home/car1.svg";
import car2 from "../../../assets/images/home/car2.svg";
import car3 from "../../../assets/images/home/car3.svg";
import { title } from "process";

const pricingHour = [
  {
    carImg: car1.src,
    title: "Mercedes S-Class",
    des: [
      {
        subTitle: "Heathrow to Central London",
        price: "£165",
      },
      {
        subTitle: "Gatwick to Central London",
        price: "£135",
      },
      {
        subTitle: "London City to Central London",
        price: "£165",
      },
      {
        subTitle: "Stansted to Central London",
        price: "£260",
      },
      {
        subTitle: "Luton to Central London",
        price: "£250",
      },
      {
        subTitle: "Farnborough to Central London",
        price: "£275",
      },
    ],
  },
  {
    carImg: car2.src,
    title: "Mercedes V-Class & EQV",
    des: [
      {
        subTitle: "Heathrow to Central London",
        price: "£165",
      },
      {
        subTitle: "Gatwick to Central London",
        price: "£135",
      },
      {
        subTitle: "London City to Central London",
        price: "£165",
      },
      {
        subTitle: "Stansted to Central London",
        price: "£260",
      },
      {
        subTitle: "Luton to Central London",
        price: "£250",
      },
      {
        subTitle: "Farnborough to Central London",
        price: "£275",
      },
    ],
  },
  {
    carImg: car3.src,
    title: "Mercedes E-Class",
    des: [
      {
        subTitle: "Heathrow to Central London",
        price: "£165",
      },
      {
        subTitle: "Gatwick to Central London",
        price: "£135",
      },
      {
        subTitle: "London City to Central London",
        price: "£165",
      },
      {
        subTitle: "Stansted to Central London",
        price: "£260",
      },
      {
        subTitle: "Luton to Central London",
        price: "£250",
      },
      {
        subTitle: "Farnborough to Central London",
        price: "£275",
      },
    ],
  },
];

const airportTransferData = [
  {
    title: "Flight Monitoring",
    subTitle:
      "We monitor your flight arrival time, so if your flight is early or delayed, we will meet you on time. Every time.",
  },
  {
    title: "Waiting & Parking Included",
    subTitle:
      "We understand that on occasion you may need a little more time. Your airport transfer includes 60 mins waiting time & parking after the flight has landed.",
  },
  {
    title: "Meet and Greet Service",
    subTitle:
      "Your chauffeur will text you on arrival at the airport and greet you with a bespoke name-board. He will help you with your bags and provide a trolley if required.",
  },
  {
    title: "Professional Chauffeur",
    subTitle:
      "Your personal chauffeur will be impeccably dressed in a smart dark suit, shirt, and tie. Always professional & always on time.",
  },
];
const AirportTransferSection = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const classes = ServicesStyles(theme);

  return (
    <Box sx={classes.bgBox1}>
      <Stack direction="column" spacing={2}>
        <Container maxWidth="lg">
          <Stack direction="column" spacing={1}>
            <Typography sx={classes.kugileFont}>
              <span style={{ color: theme.palette.primary.main }}>
                Airport{" "}
              </span>{" "}
              Transfer
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.primary.main}
              gutterBottom
              pb={2}
            >
              (Seamless Transfers, Stress-Free Travel)
            </Typography>
            <Divider
              variant="fullWidth"
              orientation="horizontal"
              sx={{
                border: "1px solid",
                borderImageSource:
                  "linear-gradient(87.19deg, rgba(221, 184, 99, 0.16) 4.68%, rgba(173, 144, 77, 0.295) 95.32%)",
                borderImageSlice: 1,
              }}
            />
            <Typography variant="body1" pt={2}>
              RNR Chauffeurs offers reliable and luxurious airport transfer
              services, ensuring you arrive on time and in comfort. Whether it’s
              a pickup or drop-off, our professional chauffeurs and premium
              vehicles make your journey smooth and stress-free. Sit back,
              relax, and let us handle the rest.
            </Typography>
          </Stack>
        </Container>
        <Container maxWidth="lg" sx={{ pt: 5 }}>
          <Stack
            direction={lgUp ? "row" : "column"}
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            {airportTransferData.map((item, index) => {
              return (
                <Stack
                  direction="column"
                  key={index}
                  spacing={2}
                  display="flex"
                  textAlign="start"
                  alignItems="start"
                  width="100%"
                >
                  <Typography
                    sx={{
                      fontFamily: "Kugile",
                      fontSize: "32px",
                      fontWeight: "400",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2">{item.subTitle}</Typography>
                </Stack>
              );
            })}
          </Stack>
          <Stack direction="column" mt={8} alignItems="center">
            <Typography>Airport Transfer Prices</Typography>
            <Typography> Includes 60 mins waiting time & parking</Typography>
          </Stack>
          <Stack
            direction={lgUp ? "row" : "column"}
            spacing={2}
            alignItems="center"
            justifyContent="center"
            sx={{ pt: 5 }}
          >
            {pricingHour.map((car, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: "50px",
                  backgroundColor: "#65573733",
                  padding: 4,
                  height: "auto",
                  width: { xs: "100%", sm: "50%", md: "417px" },
                  transform: `scale(${1})`,
                  opacity: 0.9,
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  color: "#fff",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:before": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    padding: "1px",
                    borderRadius: "50px",
                    background:
                      "linear-gradient(87.19deg, rgba(221, 184, 99, 0.32) 4.68%, #030303 65.27%, rgba(173, 144, 77, 0.59) 95.32%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  },
                }}
              >
                <Stack direction="column" spacing={3}>
                  <img
                    src={car.carImg}
                    alt={car.title}
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                  <Stack direction="column" spacing={2}>
                    <Typography variant="caption" gutterBottom>
                      {car.title}
                    </Typography>
                    <Stack direction="column" spacing={0.5}>
                      {car.des.map((item, index) => (
                        <Stack
                          key={index}
                          direction="row"
                          justifyContent="space-between"
                        >
                          <Typography variant="body1" fontSize="15px">
                            {item.subTitle}
                          </Typography>
                          <Typography variant="body1">{item.price}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                  <Button
                    variant="contained"
                    href={viewpaths.bookingViewPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      width: "auto",
                      height: "5vh",
                      mt: "15px !important",
                    }}
                  >
                    BOOK THIS CAR
                  </Button>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};
export default AirportTransferSection;
