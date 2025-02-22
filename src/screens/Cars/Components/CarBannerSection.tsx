import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import bannerCar from "../../../assets/images/cars/bannerCar.webp";

const CarsBannerSection = () => {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#030303",
          width: "100%",
          height: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            "&.MuiContainer-root": {
              paddingRight: 0,
              marginRight: "inherit",
            },
          }}
        >
          <Stack
            direction={isLgUp ? "row" : "column"}
            justifyContent={isLgUp ? "flex-end" : "center"}
            alignItems={isLgUp ? "center" : "flex-start"}
            spacing={4}
          >
            <Stack direction={"column"} justifyContent={"center"} spacing={1}>
              <Typography
                sx={{
                  fontFamily: "kugile",
                  fontWeight: 400,
                  fontSize: isMdUp ? "42px" : "28px",
                  textAlign: isLgUp ? "start" : "center",
                }}
              >
                Luxury car Rental in London
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.primary.main,
                  fontFamily: "kugile",
                  fontWeight: 400,
                  fontSize: isMdUp ? "35px" : "24px",
                  textAlign: isLgUp ? "start" : "center",
                }}
              >
                The definitive collection
              </Typography>
            </Stack>
            <img
              src={bannerCar.src}
              width={isLgUp ? "65%" : isMdUp ? "80%" : "100%"}
              style={{
                alignSelf: isLgUp ? "flex-start" : "center",
                marginTop: isLgUp ? 0 : "20px",
              }}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};
export default CarsBannerSection;
