import { Flex, Text, Image } from "@chakra-ui/react";
import styles from "../../pages/Hand.module.css";
const Hero = () => {
  return (
    <>
      <Flex
        direction={"column"}
        px={[2, 4, 6, 10]}
        py={[4, 4, 4, 6]}
        sx={{ "& > .chakra-text": { lineHeight: "normal" } }}
        maxW={[null, null, null, "80%", "80rem"]}
        mx="auto"
        h={"90vh"}
      >
        <Text
          color={"white"}
          pos={"relative"}
          top={[1, 2, 6, 10]}
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
              "@media screen and (min-width: 360px)": {
                fontSize: "4.2rem",
              },
            },
          }}
          fontSize={[
            "3.5rem ",
            "6rem !important",
            "8rem !important",
            "9.5rem !important",
          ]}
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
          Developer with an eye for design backed by experience as a design
          intern and freelancer. I have a passion for good user experience and
          mobile responsiveness. I have a knack for learning and problem solving
          using the right tools and up to date technology. Goal-oriented and
          self-driven. <br /> Available for Frontend roles.
        </Text>
      </Flex>
      <Flex
        h={["50%", "50%", "40%", "70%"]}
        pos={"absolute"}
        zIndex={20}
        className={styles.hand}
      >
        <Image src="/hand.png" />
      </Flex>
    </>
  );
};

export default Hero;
