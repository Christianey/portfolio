import { Flex, Text, Image, Box } from "@chakra-ui/react";
import styles from "../../pages/Hand.module.css";
import Img from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Box
        px={[2, 4, 6, 10]}
        py={[4, 4, 4, 6]}
        sx={{ "& > .chakra-text": { lineHeight: "normal" } }}
        w={[null, null, null, "80%", "70%"]}
      >
        <Box pos="relative">
          <Text
            color={"white"}
            pos={"relative"}
            top={["1rem", "1.6rem", "3rem", "4rem"]}
            left={[0, 2, 20, 28]}
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
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                "@media screen and (min-width: 360px)": {
                  fontSize: "4.2rem",
                },
                "@media screen and (min-width: 480px and max-width: 500px)": {
                  fontSize: "4rem",
                },
              },
            }}
            fontSize={[
              "3.5rem ",
              "5.8rem !important",
              "8rem !important",
              "9.5rem !important",
            ]}
            ml={["-.3rem", "-0.5rem", "-1rem", "-1rem"]}
            pos={"relative"}
            zIndex={7}
          >
            Fegabyte
          </Text>
        </Box>
        <Box
          pos={"relative"}
          zIndex={5}
          color={"white"}
          textAlign={"justify"}
          p={["1rem", "1rem", "2rem", "2rem"]}
          borderRadius={"lg"}
          pt={["1rem", "1.5rem", "2rem", "3rem"]}
          top={["-1.8rem", "-3rem", "-3.8rem", "-4.5rem"]}
          overflow={"hidden"}
          boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
          backdropBlur={"5px"}
          border={"1px solid rgba(255, 255, 255, 0.3)"}
          w="full"
          fontSize={["1rem", "1rem", "1rem", "1.3rem"]}
        >
          <Flex
            w="100%"
            height="100%"
            filter={"blur(20px) opacity(0.1)"}
            pos={"absolute"}
            top={0}
            left={0}
          >
            <Img src="/bg.jpeg" layout="fill" />
          </Flex>
          <Text pos="relative" zIndex={6} fontSize={["md", "md", "md", "lg"]}>
            I am a web developer with an eye for design backed by experience as
            a graphic designer. I build quality web applications. I am
            available for Frontend developer roles and projects. <br /> 
            <Link href={"/contact"}>
              <a>
                <Text as="span" color="primary">
                  Contact me
                </Text>
              </a>
            </Link>
          </Text>
        </Box>
      </Box>
      <Flex
        h={["50%", "50%", "40%", "70%"]}
        pos={"absolute"}
        zIndex={20}
        className={styles.hand}
      >
        <Image src="/hand.png" alt="hello" h="100%" />
      </Flex>
    </>
  );
};

export default Hero;
