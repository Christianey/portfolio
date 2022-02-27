import { ScaleFade, Box } from "@chakra-ui/react";
import FloatingNav from "../components/common/FloatingNav";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ScaleFade in={true} initialScale={0.7}>
      <Box h={"85vh"} pos="relative">
        <Hero />
        <FloatingNav />
      </Box>
    </ScaleFade>
  );
}
