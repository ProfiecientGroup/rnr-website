import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AbouStyles from "./AboutStyles";
import ourStoryCar from "../../assets/images/about/ourStoryCar.webp";
import leader1 from "../../assets/images/about/leader1.webp";
import leader2 from "../../assets/images/about/leader2.webp";

const TOP_NAV_HEIGHT = 64;

type LeaderCardProps = {
  src: string;
  title: string;
  subtitle: string;
};

const LeaderCard: React.FC<LeaderCardProps> = ({ src, title, subtitle }) => (
  <Stack direction="column" spacing={2} alignItems="center">
    <img
      src={src}
      alt={title}
      style={{ width: "100%", maxWidth: "250px", height: "auto" }}
    />
    <Typography variant="body1" textAlign="center">
      {title}
    </Typography>
    <Typography variant="body2" textAlign="center">
      {subtitle}
    </Typography>
  </Stack>
);

const About = () => {
  const theme = useTheme();
  const classes = AbouStyles(theme);
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const getBannerSection = () => (
    <Stack direction="column">
      <Box sx={classes.bgBox}></Box>
      <Box sx={{ backgroundColor: theme.palette.primary.darkest }}>
        <Container
          maxWidth="lg"
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            padding: isLgUp ? "20px 0 85px" : "0 16px",
          }}
        >
          <Stack direction="column" spacing={2}>
            <Typography
              sx={{ ...classes.experiFont, textAlign: "start" }}
              variant="h6"
            >
              <span>Our Goals.</span>
              <span style={{ color: theme.palette.primary.main }}>
                {" "}
                Our Mission.
              </span>
            </Typography>
            <Typography>
              RNR Chauffeurs is a premier chauffeur service in Wokingham. We
              provide luxury transportation for all occasions, including airport
              transfers, corporate travel, and special events.
            </Typography>
            <Typography>
              Our fleet of high-end vehicles is driven by professional
              chauffeurs who are committed to providing our clients with the
              highest level of service.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );

  const getOurStorySection = () => (
    <Box sx={classes.ourStoryBox}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <img
          src={ourStoryCar.src}
          width={isLgUp ? "auto" :  "300px"}
          height={isLgUp ? "400px" : "auto"}
          alt="Luxury car"
          style={{
            marginTop: "30px",
            borderRadius: "10px",
          }}
        />
      </Box>
      <Box sx={classes.textBox}>
        <Typography sx={classes.ourStoryFont}>Our Story</Typography>
        <Typography sx={classes.content}>
            RNR has developed over the last decade into one of the finest
            British chauffeur companies, and has become a name synonymous within
            the industry for professionalism, refinement and luxury. RNR was
            founded in 2005, by the late Andrew Senior along with his son Will,
            and later on was joined by his eldest son Richard. Starting with
            just two vehicles and a handful of exclusive clientele, today there
            are over 250 professional chauffeurs who drive some of the most
            important and influential people on the globe.
          <br />
          <br />
            Andrew Senior’s founding principles of quality, authenticity and
            innovation, over his 20 years in the industry, are still of the
            utmost importance today. His son Will Senior has now taken these
            early principles and moved them forward. Our aim is, and always was,
            to redefine luxury travel.
        </Typography>
      </Box>
    </Box>
  );

  const getLeadershipSection = () => (
    <Box sx={classes.leadershipBox}>
      <Container
        maxWidth="lg"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          padding: isLgUp ? "20px 0 85px" : "0 16px",
        }}
      >
        <Stack
          direction="column"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={classes.verticalLine}></Box>
          <Typography sx={classes.addressBox} variant="caption">
            Address
          </Typography>
          <Typography variant="h4" textAlign="center">
            Leadership Team
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            People make companies
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <LeaderCard
              src={leader1.src}
              title="Mercedes S-Class"
              subtitle="Hourly rate in Central London"
            />
            <LeaderCard
              src={leader2.src}
              title="Mercedes S-Class"
              subtitle="Hourly rate in Central London"
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );

  return (
    <>
      {getBannerSection()}
      {getOurStorySection()}
      {getLeadershipSection()}
    </>
  );
};

export default About;
