import { ChakraProvider, Flex, Image } from "@chakra-ui/react";
import FloatingNav from "../components/common/FloatingNav";
import Nav from "../components/common/Nav";
import CircleGradients from "../components/Hero/components/CircleGradients";
import theme from "../constants/theme";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Flex
        direction={"column"}
        pos={"relative"}
        w="full"
        minH="100vh"
        bg={"darkBlue"}
        overflow={"hidden"}
      >
        <Nav />
        <CircleGradients />
        <Component {...pageProps} />
        <FloatingNav />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
