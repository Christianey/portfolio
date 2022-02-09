import { Circle, Flex, Image } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/common/Nav";
import Hero from "../components/Hero";
import styles from "./Hand.module.css";

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
          size={["20rem", "25rem", "25rem", "30rem"]}
          left={"50%"}
          top={"-10%"}
          transform={"translate(-50%, -50%)"}
          bg="radial-gradient(circle, #3A9190 30%, #00C95D55 47%, #00C95D22 57%, #00C95D11 62%, transparent 71%)"
          sx={{
            backdropFilter: [null, null, null, "blur(2px) "],
          }}
          zIndex={"1"}
        />
        <Circle
          pos={"absolute"}
          size={["20rem", "25rem", "25rem", "30rem"]}
          left={"50%"}
          bottom={"-10%"}
          transform={"translate(-50%, 50%)"}
          bg="radial-gradient(circle, #3A9190 30%, #3A91A055 47%, #3A91A022 57%, #3A91A011 62%, transparent 71%)"
          sx={{
            backdropFilter: [null, null, null, "blur(2px) "],
          }}
        />
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
    </>
  );
}
