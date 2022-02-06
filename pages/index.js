import { Circle, Flex } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/common/Nav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fegabyte Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="http://fonts.cdnfonts.com/css/nexa-bold"
          rel="stylesheet"
        ></link>
      </Head>
      <Flex
        direction={"column"}
        pos={"relative"}
        w="full"
        h="100vh"
        bg={"darkBlue"}
        overflow={"hidden"}
      >
        <Circle
          pos={"absolute"}
          size={["20rem", "25rem", "25rem", "28rem"]}
          left={"50%"}
          top={"-10%"}
          transform={"translate(-50%, -50%)"}
          bg="radial-gradient(circle, #00C95D 30%, transparent 70%)"
          zIndex={"1"}
        />
        <Circle
          pos={"absolute"}
          size={["20rem", "25rem", "25rem", "28rem"]}
          left={"50%"}
          bottom={"-10%"}
          transform={"translate(-50%, 50%)"}
          bg="radial-gradient(circle, #3A91A0 30%, transparent 70%)"
        />

        <Nav />
        <Hero />
      </Flex>
    </>
  );
}
