import Head from "next/head";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Nav from "../components/common/Nav";
import CircleGradients from "../components/Hero/components/CircleGradients";
import theme from "../constants/theme";
import "../public/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Head>
        <title>Fegabyte Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        direction={"column"}
        pos={"relative"}
        w="full"
        bg={"darkBlue"}
        overflow={"hidden"}
      >
        <Nav />
        <CircleGradients />
        <Box
          zIndex={30}
          px={4}
          pt={["8vh", "10vh", "10vh", "10vh"]}
          pb={8}
          minHeight={"100vh"}
        >
          <Component {...pageProps} />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
