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

const pricingHour = [
  {
    carImg: car1.src,
    title: "Mercedes S-Class",
    des: [
      {
        subTitle: "Hourly rate in Central London",
        price: "£75",
      },
      {
        subTitle: "3 hours (minimum hire)",
        price: "£225",
      },
      {
        subTitle: "Day rate (8 hours)",
        price: "£600",
      },
      {
        subTitle: "Hourly rate outside of London",
        price: "£60",
      },
    ],
  },
  {
    carImg: car2.src,
    title: "Mercedes V-Class & EQV",
    des: [
      {
        subTitle: "Hourly rate in Central London",
        price: "£65",
      },
      {
        subTitle: "3 hours (minimum hire)",
        price: "£195",
      },
      {
        subTitle: "Day rate (8 hours)",
        price: "£520",
      },
      {
        subTitle: "Hourly rate outside of London",
        price: "£50",
      },
    ],
  },
  {
    carImg: car3.src,
    title: "Mercedes E-Class",
    des: [
      {
        subTitle: "Hourly rate in Central London",
        price: "£55",
      },
      {
        subTitle: "3 hours (minimum hire)",
        price: "£165",
      },
      {
        subTitle: "Day rate (8 hours)",
        price: "£440",
      },
      {
        subTitle: "Hourly rate outside of London",
        price: "£40",
      },
    ],
  },
];

const PricingHourSection = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const classes = ServicesStyles(theme);

  return (
    <Box sx={classes.bgBox}  pt={17}>
      <Stack direction="column" spacing={2}>
        <Container maxWidth="lg">
          <Stack direction="column" spacing={1}>
            <Typography sx={classes.kugileFont}>
              Simple{" "}
              <span style={{ color: theme.palette.primary.main }}>
                By the Hour{" "}
              </span>{" "}
              pricing
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.primary.main}
              gutterBottom
              pb={2}
            >
              Flexibility at Your Service
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
              ith RNR Chauffeurs&apos; simple by-the-hour pricing, you&apos;re
              in control. Book our premium vehicles and professional chauffeurs
              for as long as you need, with no rush and no hassle. Perfect for
              business trips, sightseeing, or special occasions, we provide the
              flexibility to match your plans.
            </Typography>
          </Stack>
        </Container>
        <Container maxWidth="lg" sx={{ pt: 5 }}>
          <Stack
            direction={lgUp ? "row" : "column"}
            spacing={2}
            justifyContent="center"
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
                      mt: "20px !important",
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
export default PricingHourSection;
