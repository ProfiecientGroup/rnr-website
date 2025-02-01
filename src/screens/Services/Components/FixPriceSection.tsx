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
  import bannerCar2 from "assets/images/services/car2.png";
  import Sporting from "assets/images/services/sporting-icon.png";
  import urls from "global/constants/urls";
  import viewpaths from "global/constants/viewPathConstants";
  const eventsData = [
    {
      text: "sporting",
      des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
    },
    {
      text: "sporting",
      des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
    },
    {
      text: "sporting",
      des: "From the BAFTAs to the Brits let us help you organize your ground transportation.",
    },
   
  ];
  const FixPriceSection = () => {
    const theme = useTheme();
  
    const classes = ServicesStyles(theme);
  
    return (
      <Box sx={classes.bgBox1}>
        <Stack direction="column" spacing={2}>
          <Container
            maxWidth="lg"
          
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
                    paddingLeft: 0,
                    marginLeft: "inherit",
                },
                }}
          >
            <Stack direction="row" spacing={1} mt={3}>
            <img
                src={bannerCar2.src}
                width={"1000px"}
                height={"420px"}
                style={{
                  position: "relative",
                  right: "190px",
                }}
              />
              <Grid container spacing={0} width={"100%"}>
                {eventsData.map((item: any, index: number) => {
                  return (
                    <Grid item lg={12}>
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
              sx={{ width: "12vw",height:"5vh", mt: "0px !important" }}
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
  