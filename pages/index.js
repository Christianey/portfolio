import { ScaleFade, Box } from "@chakra-ui/react";
import Head from "next/head";
import FloatingNav from "../components/common/FloatingNav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ScaleFade in={true} initialScale={0.7}>
      <Head>
        <title>Fegabyte Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box h={"85vh"} pos="relative">
        <Hero />
        <FloatingNav />
      </Box>
    </ScaleFade>
  );
}
