import { Flex, Text, Image } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      direction={"column"}
      pos={"relative"}
      w="full"
      h="95vh"
      bg={"darkBlue"}
    >
      <Text color={"primary"}>Hello there, I am </Text>
      <Flex
        color={"secondary"}
        fontWeight={"bold"}
        // bgGradient="linear(to-r, primary, secondary)"
        bg="-webkit-linear-gradient( 00C95D 0%, 3A91A0 50%)"
        bg="-webkit-linear-gradient(0deg, #00C95D 0%, #3A91A0 50%)"
        sx={{
          "&": {
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          },
        }}
        fontSize={"10rem"}
      >
        Fegabyte
      </Flex>
    </Flex>
  );
};

export default Hero;
