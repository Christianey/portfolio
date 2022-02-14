import { Slide, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Slide direction="top" in={true} style={{ position: "static" }}>
      <Text color="white" fontSize={"3rem"} fontWeight={"bold"}>
        About
      </Text>
    </Slide>
  );
};

export default About;
