import { Flex, Text, Circle } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      direction={"column"}
      pos={"relative"}
      w="full"
      h="95vh"
      bg={"darkBlue"}
      overflow={"hidden"}
    >
      <Circle
        pos={"absolute"}
        size={"30rem"}
        left={"50%"}
        top={"-10%"}
        transform={"translate(-50%, -50%)"}
        bg="radial-gradient(circle, #00C95D 30%, transparent 70%)"
      />
      <Circle
        pos={"absolute"}
        size={"30rem"}
        left={"50%"}
        bottom={"-10%"}
        transform={"translate(-50%, 50%)"}
        bg="radial-gradient(circle, #3A91A0 30%, transparent 70%)"
      />
      <Text color={"primary"}>Hello there, I am </Text>
      <Flex
        color={"secondary"}
        fontWeight={"bold"}
        // bgGradient="linear(to-r, primary, secondary)"
        // bg="-webkit-linear-gradient( 00C95D 0%, 3A91A0 50%)"
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
