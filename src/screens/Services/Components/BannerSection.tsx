import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ServicesStyles from "../ServicesStyles";
import bannerCar from "assets/images/services/bannerCar.png";
import Sporting from "assets/images/services/sporting-icon.png";
import urls from "global/constants/urls";
import viewpaths from "global/constants/viewPathConstants";
const eventsData = [
  {
    icon: Sporting.src,
    text: "sporting",
    des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
  },
  {
    icon: Sporting.src,
    text: "sporting",
    des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
  },
  {
    icon: Sporting.src,
    text: "sporting",
    des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
  },
  {
    icon: Sporting.src,
    text: "sporting",
    des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
  },
];
const BannerSection = () => {
  const theme = useTheme();

  const classes = ServicesStyles(theme);

  return (
    <Box sx={classes.bgBox}>
      <Stack direction="column" spacing={2}>
        <Container
          maxWidth="lg"
          // sx={{
          //   "&.MuiContainer-root": {
          //     paddingRight: 0,
          //     paddingLeft: 9,
          //     marginRight: "inherit",
          //   },
          // }}
        >
          <Stack direction="column" spacing={1}>
            <Typography sx={classes.kugileFont}>
              Chauffeur for any big{" "}
              <span style={{ color: theme.palette.primary.main }}>Events </span>
            </Typography>
            <Typography
              variant="body1"
              color={theme.palette.primary.main}
              gutterBottom
              pb={2}
            >
              Arrive in Style, Leave an Impression
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
              Luxury chauffeur services for any big event, ensuring a seamless,
              stylish, and stress-free journey. Whether it’s a wedding,
              corporate event, prom, or special celebration, our professional
              chauffeurs and premium vehicles guarantee an exceptional
              experience from start to finish
            </Typography>
          </Stack>
        </Container>
        <Container
          maxWidth="lg"
          sx={{
            "&.MuiContainer-root": {
              paddingRight: 0,
              marginRight: "inherit",
            },
          }}
        >
          <Stack direction="row" spacing={1} mt={3}>
            <Grid container spacing={0} width={"100%"}>
              {eventsData.map((item: any, index: number) => {
                return (
                  <Grid item lg={6}>
                    <Stack direction="column" spacing={2} >
                      <Stack direction="row" spacing={2}>
                        <img src={item.icon} height={40} width={40} />
                        <Typography>{item.text}</Typography>
                      </Stack>
                      <Typography>{item.des}</Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
            <img
              src={bannerCar.src}
              width={"830px"}
              height={"420px"}
              style={{
                position: "relative",
                left: "190px",
              }}
            />
          </Stack>
          <Button
            variant="contained"
            href={viewpaths.bookingViewPath}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ width: "12vw", mt: "0px !important" }}
          >
            Book Now
          </Button>
        </Container>
      </Stack>
    </Box>
  );
};
export default BannerSection;
