import { Flex, Slide } from "@chakra-ui/react";
import WorkCard from "../components/work/WorkCard";

const Work = () => {
  return (
    <Slide direction="left" in={true} style={{ position: "static" }}>
      <Flex
        wrap={"wrap"}
        py={[6, 6, 6, 10]}
        gridGap={8}
        maxW={"50rem"}
        justify={"space-around"}
        mx={"auto"}
      >
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </Flex>
    </Slide>
  );
};

export default Work;
