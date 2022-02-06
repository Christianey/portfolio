import { Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex direction={"column"}>
      <Text color={"primary"}>Hello there, I am </Text>
      <Flex
        color={"secondary"}
        fontWeight={"bold"}
        bg="-webkit-linear-gradient(0deg, #00C95D 0%, #3A91A0 50%)"
        sx={{
          "&": {
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        }}
        fontSize={["4rem", "6rem", "8rem", "10rem"]}
      >
        Fegabyte
      </Flex>
    </Flex>
  );
};

export default Hero;
