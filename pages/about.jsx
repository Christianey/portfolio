import { Slide, Text, Box } from "@chakra-ui/react";

const About = () => {
  return (
    <Slide direction="top" in={true} style={{ position: "static" }}>
      <Box maxWidth="50rem" mx="auto">
        <Text
          my={4}
          fontSize={"1.5rem"}
          color={"white"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          ABOUT
        </Text>
        <Text
          // pos={"relative"}
          // zIndex={5}
          color={"white"}
          textAlign={"justify"}
          p={["1rem", "1rem", "2rem", "2rem"]}
          borderRadius={"lg"}
          // pt={["1rem", "1.5rem", "2rem", "3rem"]}
          // top={["-1rem", "-1.5rem", "-2rem", "-3rem"]}
          overflow={"hidden"}
          boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
          backdropBlur={"5px"}
          border={"1px solid rgba(255, 255, 255, 0.3)"}
          w="full"
          _before={{
            content: "''",
            w: "full",
            h: "full",
            pos: "absolute",
            bg: "url(bg.jpeg)",
            left: 0,
            top: 0,
            backgroundSize: "contain",
            filter: "blur(20px) opacity(0.1)",
          }}
          fontSize={["1rem", "1rem", "1rem", "1.3rem"]}
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
          self-driven. <br /> Developer with an eye for design backed by
          experience as a design intern and freelancer. I have a passion for
          good user experience and mobile responsiveness. I have a knack for
          learning and problem solving using the right tools and up to date
          technology. Goal-oriented and self-driven. <br /> Developer with an
          eye for design backed by experience as a design intern and freelancer.
          I have a passion for good user experience and mobile responsiveness. I
          have a knack for learning and problem solving using the right tools
          and up to date technology. Goal-oriented and self-driven.
        </Text>
      </Box>
    </Slide>
  );
};

export default About;
