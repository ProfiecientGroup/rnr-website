import { Theme, styled, useMediaQuery } from "@mui/material";
import React, { ReactNode, useState } from "react";
import { useMobileNav } from "../../hooks/use-mobile-nav";
import TopNav from "./Components/TopNav";
import { useSections } from "../Config";
import MobileNav from "./Components/MobileNav";
import Footer from "./Components/Footer";

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  // Example of using theme
  backgroundColor: theme.palette.background.default,
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

// const BackdropOverlay = styled("div")({
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.25)",
//   zIndex: 10,
// });

interface CustomProps {
  children?: ReactNode;
}

const MainLayout = (props: CustomProps) => {
  const { children } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("sm"));
  const mobileNav = useMobileNav();
  const sections = useSections();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <TopNav
        onMobileNavOpen={mobileNav.handleOpen}
        sections={sections}
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      {!lgUp && (
        <MobileNav
          onClose={mobileNav.handleClose}
          open={mobileNav.open}
          sections={sections}
        />
      )}
      <LayoutRoot
        sx={{ pt: lgUp ? 18 : 10 }}
      >
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
      <Footer />
    </>
  );
};

export default MainLayout;
