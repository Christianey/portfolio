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
        <WorkCard
          description={
            "A responsive single page webiste with functional form that verifies Debit card input and gives appropriate error for invalid errors for each input field respectively."
          }
          title={"Simple Checkout Page"}
          tools={["Chakra UI", "ReactJS"]}
          imageLink={"/landing-lights.png"}
          githubLink={"https://github.com/Christianey/landing-light.git"}
          websiteLink={"https://landing-lights.netlify.app"}
        />
        {/* <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard /> */}
      </Flex>
    </Slide>
  );
};

export default Work;
