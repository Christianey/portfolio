import { Flex, Text, Circle } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      direction={"column"}
      px={[4, 4, 6, 10]}
      sx={{ "& > .chakra-text": { lineHeight: "normal" } }}
      w={[null, null, null, null, "70%"]}
    >
      <Text
        color={"white"}
        pos={"relative"}
        top={[2, 2, 6, 10]}
        left={[2, 2, 20, "28"]}
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
        fontSize={["3.5rem", "6rem", "8rem", "10rem"]}
        ml={["-.3rem", "-0.5rem", "-1rem", "-1rem"]}
        pos={"relative"}
        zIndex={7}
      >
        Fegabyte
      </Text>
      <Text
        pos={"relative"}
        zIndex={8}
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
        _before={{
          content: "''",
          w: "full",
          h: "full",
          pos: "absolute",
          bg: "url(bg.jpeg)",
          left: 0,
          top: 0,
          backgroundSize: "contain",
          filter: "blur(20px) opacity(0.12)",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque vero
        laudantium, et impedit error dignissimos accusamus? Iste nulla assumenda
        asperiores odio veniam cumque inventore aut praesentium amet, reiciendis
        officiis! Accusantium sint architecto qui ab, nam quis laudantium
        laboriosam cupiditate ratione quidem tempore doloribus quo, maxime
        dolorem. Magnam modi voluptatum sint!
      </Text>
    </Flex>
  );
};

export default Hero;
