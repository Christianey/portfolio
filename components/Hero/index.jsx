import { Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      direction={"column"}
      px={[4, 4, 6, 10]}
      py={[2, 2, 4, 6]}
      sx={{ "& > .chakra-text": { lineHeight: "normal" } }}
      w={[null, null, null, "80%", "70%"]}
    >
      <Text
        color={"white"}
        pos={"relative"}
        top={[2, 2, 6, 10]}
        left={[0, 2, 20, "28"]}
      >
        Hello there, I am{" "}
      </Text>
      <Text
        as={"h1"}
        color={"secondary"}
        fontWeight={"bold"}
        bg="-webkit-linear-gradient(0deg, #00C95D 0%, #3A91A0 50%)"
        sx={{
          "&": {
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        }}
        fontSize={["4.3rem", "6rem", "8rem", "10rem"]}
        ml={["-.3rem", "-0.5rem", "-1rem", "-1rem"]}
        pos={"relative"}
        zIndex={7}
      >
        Fegabyte
      </Text>
      <Text
        pos={"relative"}
        zIndex={5}
        color={"white"}
        textAlign={"justify"}
        p={["1rem", "1rem", "2rem", "2rem"]}
        borderRadius={"lg"}
        pt={["1rem", "1.5rem", "2rem", "3rem"]}
        top={["-1rem", "-1.5rem", "-2rem", "-3rem"]}
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
        Developer with an eye for design backed by experience as a design intern
        and freelancer. I have a passion for good user experience and mobile
        responsiveness. I have a knack for learning and problem solving using
        the right tools and up to date technology. Goal-oriented and
        self-driven.
      </Text>
    </Flex>
  );
};

export default Hero;
