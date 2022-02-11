import { Circle, Flex, Image, ScaleFade } from "@chakra-ui/react";
import Head from "next/head";
import FloatingNav from "../components/common/FloatingNav";
import Nav from "../components/common/Nav";
import Hero from "../components/Hero";
import CircleGradients from "../components/Hero/components/CircleGradients";
import styles from "./Hand.module.css";

export default function Home() {
  return (
    <ScaleFade in={true} initialScale={0.5}>
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
        <CircleGradients />
        <Flex
          h={["50%", "50%", "40%", "70%"]}
          pos={"absolute"}
          zIndex={20}
          margin={0}
          bottom={0}
          right={0}
          className={styles.hand}
          sx={{
            "&": {
              "@keyframes example": {
                from: { backgroundColor: "red" },
                to: { backgroundColor: "yellow" },
              },
            },
          }}
        >
          <Image src="/hand.png" />
        </Flex>
        <Nav />
        <Hero />
      </Flex>
      <FloatingNav />
    </ScaleFade>
  );
}
