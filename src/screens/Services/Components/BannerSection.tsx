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
import bannerCar from "assets/images/services/bannerCar.webp";
import sporting from "assets/images/services/sporting-icon.webp";
import awards from "assets/images/services/award-icon.webp";
import conferences from "assets/images/services/conferences-icon.webp";
import exhibitions from "assets/images/services/exhibitions-icon.webp";
import viewpaths from "global/constants/viewPathConstants";

const eventsData = [
  {
    icon: awards.src,
    text: "Awards",
    des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
  },
  {
    icon: conferences.src,
    text: "Conferences",
    des: "From science & academic conferences to news conferences. We move large groups safely.",
  },
  {
    icon: exhibitions.src,
    text: "Exhibitions",
    des: "Luxury travel solutions to museums, galleries and exhibition halls.",
  },
  {
    icon: sporting.src,
    text: "Sporting Events",
    des: "From Formula 1 to Rugby Internationals, we’ve excelled at them all.",
  },
];
const BannerSection = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("md"));
  const classes = ServicesStyles(theme);

  return (
    <Box sx={classes.bgBox} overflow={"hidden"}>
      <Stack direction="column" spacing={2}>
        <Container maxWidth="lg">
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
        <Container maxWidth="lg">
          <Stack direction={lgUp ? "row" : "column"} spacing={5} mt={3}>
            <Grid container width={"100%"}>
              {eventsData.map((item: any, index: number) => {
                return (
                  <Grid item lg={6} key={index} mt={2}>
                    <Stack direction="column" spacing={2} mb={1} pr={4}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <img src={item.icon} height={35} width={35} />
                        <Typography
                          sx={{
                            fontFamily: "Kugile",
                            fontSize: "23px",
                            color: theme.palette.primary.main,
                            pt: 1.5,
                          }}
                          variant="body1"
                        >
                          {item.text}
                        </Typography>
                      </Stack>
                      <Typography variant="body2">{item.des}</Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
            <Stack sx={{ justifyContent: "flex-end", width: "100%" }}>
              <img src={bannerCar.src} width={"100%"} height={"auto"} />
            </Stack>
          </Stack>

          <Button
            variant="contained"
            href={viewpaths.bookingViewPath}
            rel="noopener noreferrer"
            sx={{
              width: lgUp ? "15vw" : "auto",
              mt: lgUp ? "30px !important" : "10px",
            }}
          >
            BOOK NOW
          </Button>
        </Container>
      </Stack>
    </Box>
  );
};
export default BannerSection;
