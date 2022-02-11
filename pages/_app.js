import { ChakraProvider } from "@chakra-ui/react";
import theme from "../constants/theme";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
