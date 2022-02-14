import { Slide, Text, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Slide direction="top" in={true} style={{ position: "static" }}>
      <Box maxWidth="50rem" mx="auto" my={4}>
        <Text
          color={"white"}
          textAlign={"justify"}
          p={["1rem", "1rem", "2rem", "2rem"]}
          borderRadius={"lg"}
          overflow={"hidden"}
          boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
          backdropBlur={"5px"}
          border={"1px solid rgba(255, 255, 255, 0.3)"}
          w="full"
          fontSize={["1rem", "1rem", "1rem", "1.3rem", "2rem"]}
        >
          Developer with an eye for design backed by experience as a design
          intern and freelancer. I have a passion for good user experience and
          mobile responsiveness. I have a knack for learning and problem solving
          using the right tools and up to date technology. Goal-oriented and
          self-driven. <br />
          Developer with an eye for design backed by experience as a design
          intern and freelancer. I have a passion for good user experience and
          mobile responsiveness. I have a knack for learning and problem solving
          using the right tools and up to date technology. Goal-oriented and
          self-driven. <br />
          Developer with an eye for design backed by experience as a design
          intern and freelancer. I have a passion for good user experience and
          mobile responsiveness. I have a knack for learning and problem solving
          using the right tools and up to date technology. Goal-oriented and
          self-driven. <br />
          Developer with an eye for design backed by experience as a design
          intern and freelancer. I have a passion for good user experience and
          mobile responsiveness. I have a knack for learning and problem solving
          using the right tools and up to date technology. Goal-oriented and
          self-driven.
        </Text>
      </Box>
    </Slide>
  );
};

export default About;
