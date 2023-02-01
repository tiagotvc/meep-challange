import GenericSnackBar from "@/components/GenericSnackBar";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/store/cart";
import { PokemonProvider } from "@/store/index";
import { useSnackbar } from "@/store/useSnackBar";
import { GlobalStyles } from "@/styles/globa-styles";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { LoggedContext } from "../store/loggedContext";
import NPProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  //avoidind hydratation error
  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  useEffect(() => {
    router.events.on("routeChangeStart", () => NPProgress.start());
    router.events.on("routeChangeComplete", () => NPProgress.done());
    router.events.on("routeChangeError", () => NPProgress.done());
  }, [router]);

  const {
    hideSnackbar,
    showSnackbar,
    isOpen,
    type,
    message,
    autoHideDuration,
    onClose,
  } = useSnackbar();

  return (
    <>
      {isLoading ? (
        <>loading...</>
      ) : (
        <ThemeProvider theme={theme}>
          <LoggedContext.Provider
            value={{
              showSnackbar,
              hideSnackbar,
            }}
          >
            <PokemonProvider pokemon={pageProps.pokemon}>
              <CartProvider>
                <GlobalStyles />
                <Navbar />
                <GenericSnackBar
                  open={isOpen}
                  type={type}
                  message={message}
                  autoHideDuration={autoHideDuration}
                  onClose={onClose}
                />
                <Component {...pageProps} />
              </CartProvider>
            </PokemonProvider>
          </LoggedContext.Provider>
        </ThemeProvider>
      )}
    </>
  );
}

export default MyApp;
