import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { Provider } from "@/contexts/ActionsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
