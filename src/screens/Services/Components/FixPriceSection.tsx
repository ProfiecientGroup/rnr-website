import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ServicesStyles from "../ServicesStyles";
import bannerCar2 from "assets/images/services/car2.png";
import Sporting from "assets/images/services/sporting-icon.png";
import urls from "global/constants/urls";
import viewpaths from "global/constants/viewPathConstants";
const eventsData = [
  {
    text: "All inclusive prices",
    des: "Fixed price journeys 24/7, whatever the traffic conditions. No hidden extras or surge pricing.",
  },
  {
    text: "No congestion charges",
    des: "Congestion charges are included in the price for Central London journeys.",
  },
  {
    text: "No Hike Pricing",
    des: "Whatever the time and traffic conditions you pay a fixed price. Any parking or tolls charged at cost.",
  },
];
const FixPriceSection = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const classes = ServicesStyles(theme);

  return (
    <Box sx={classes.bgBox1}>
      <Stack direction="column" spacing={2}>
        <Container maxWidth="lg">
          <Stack direction="column" spacing={1}>
            <Typography sx={classes.kugileFont}>
              Fix Price single way journey
              <span style={{ color: theme.palette.primary.main }}>
                (One Way)
              </span>
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.primary.main}
              gutterBottom
              pb={2}
            >
              Transparent Pricing, Premium Journeys
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
              Enjoy fixed-price, one-way journeys with RNR Chauffeurs, where
              comfort meets clarity. No hidden charges or surprises—just
              reliable, luxury travel tailored to your schedule. Experience a
              smooth, stress-free ride with our professional chauffeurs at a
              price you can count on.
            </Typography>
          </Stack>
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            "&.MuiContainer-root": {
              paddingLeft: 0,
              marginLeft: "inherit",
            },
          }}
        >
          <Stack direction={lgUp ? "row" : "column"} spacing={1} mt={3}>
            <img
              src={bannerCar2.src}
              width={lgUp ? "1000px" : "100%"}
              height={"420px"}
              style={{
                position: "relative",
                right: lgUp ? "35px" : "0px",
              }}
            />
            <Grid container spacing={0} width={"100%"} p={1}>
              {eventsData.map((item: any, index: number) => {
                return (
                  <Grid item lg={12} key={index}>
                    <Stack direction="column" spacing={1} width={"100%"}>
                      <Typography>{item.text}</Typography>
                      <Typography>{item.des}</Typography>
                    </Stack>
                  </Grid>
                );
              })}
              <Button
                variant="contained"
                href={viewpaths.bookingViewPath}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  width: lgUp ? "12vw" : "auto",
                  height: "5vh",
                  mt: "10px !important",
                }}
              >
                Book Now
              </Button>
            </Grid>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};
export default FixPriceSection;
