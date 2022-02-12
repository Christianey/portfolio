import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
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
        <Box zIndex={30} px={4} pt={"10vh"} pb={8}>
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
