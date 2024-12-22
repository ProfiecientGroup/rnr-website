import "../global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "../theme";
import MainLayout from "../layouts/MainLayout/MainLayout";


function MyApp({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    colorPreset: "rnr",
    contrast: "normal",
    direction: "ltr",
    paletteMode: "light",
    responsiveFontSizes: true,
  });

  // useEffect(() => {
  //   if (urls.PROD) {
  //     posthog.init(strings.NEXT_PUBLIC_POSTHOG_KEY, {
  //       api_host: strings.NEXT_PUBLIC_POSTHOG_HOST,
  //       session_recording: {
  //         maskAllInputs: false,
  //       },
  //     });
  //   }
  // }, []);

  return (
    <>
      <Head>
        <html lang="en-US" />
        <meta name="robots" content="index, follow" lang="en" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          lang="en"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:locale" content="en_US" />
      </Head>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
