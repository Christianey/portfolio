import { Circle, Flex, Image, ScaleFade } from "@chakra-ui/react";
import Head from "next/head";
import FloatingNav from "../components/common/FloatingNav";
import Nav from "../components/common/Nav";
import Hero from "../components/Hero";
import CircleGradients from "../components/Hero/components/CircleGradients";

export default function Home() {
  return (
    <ScaleFade in={true} initialScale={0.5}>
      <Head>
        <title>Fegabyte Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        direction={"column"}
        pos={"relative"}
        w="full"
        h="100vh"
        bg={"darkBlue"}
        overflow={"hidden"}
      >
        <CircleGradients />

        <Nav />
        <Hero />
      </Flex>
      <FloatingNav />
    </ScaleFade>
  );
}
