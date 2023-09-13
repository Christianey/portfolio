import { Slide, Flex, Text, Box, Avatar } from "@chakra-ui/react";
import Layout from "../components/common/Layout";

const About = () => {
  return (
    <Layout title="Fegabyte Tech - About">
      <Slide direction="top" in={true} style={{ position: "static" }}>
        <Box maxWidth="50rem" mx="auto" my={4}>
          <Box
            color={"white"}
            textAlign={"justify"}
            p={["1rem", "1rem", "2rem", "2rem"]}
            borderRadius={"lg"}
            overflow={"hidden"}
            boxShadow={"0 4px 30px rgba(0, 0, 0, 0.1)"}
            backdropBlur={"5px"}
            border={"1px solid rgba(255, 255, 255, 0.3)"}
            w="full"
          >
            <Flex justify={"space-between"} align="center" mb={4} wrap={"wrap"}>
              <Avatar
                mx={["auto", "auto", 0, 0]}
                mb={[4, 4, 0, 0]}
                boxSize={["8rem", "8rem", "8rem", "10rem"]}
                bg="darkBlue"
                sx={{
                  borderColor: "#00C95D !important",
                  "& img": {
                    position: "relative",
                    height: "auto",
                    top: "1rem",
                  },
                }}
                border={"3px solid"}
                src={"/fega.png"}
                overflow="hidden"
              />
              <Text
                flexBasis={["100%", "100%", "auto", "auto"]}
                textAlign={["center", "center", "right", "right"]}
                fontStyle={"italic"}
                fontSize={["1.2rem", "1.2rem", "1.5rem", "1.5rem", "1.6rem"]}
              >
                “You&apos;ll never know everything about anything, <br />{" "}
                especially something you love.” <br />
                <Text as="span" fontSize={"sm"}>
                  -Julia Child
                </Text>
              </Text>
            </Flex>
            <Text fontSize={["1rem", "1rem", "1rem", "1.3rem", "2rem"]}>
              My name is Eyube Christian, I am a web developer and graphic
              designer who specializes in building functional, interactive and
              dynamic websites and applications. I&apos;m passionate about
              making user-centric and aesthetically pleasing websites. <br />{" "}
              <br /> Being a self-taught graphic designer and web-developer, I
              really love learning new things and trying on new technologies.
              Over time, I&apos;ve been able to learn and create designs and
              websites with tools like Adobe Illustrator, Adobe Photoshop,
              Coreldraw, HTML, CSS/Sass, Javascript, React JS, NextJS, NodeJS,
              MongoDB etc. <br /> <br /> Asides programming and design, I love
              listening to music, watching football and gaming.
            </Text>
            <Flex justify={"center"} color={"primary"} my={4}>
              <a
                href={
                  "https://drive.google.com/uc?id=1gm1ugeTBdtD-FH7ZL1KV8I_5muaJ1pkr"
                }
                target={"_blank"}
                rel="noreferrer"
              >
                <Text mx="auto">View CV</Text>
              </a>
            </Flex>
          </Box>
        </Box>
      </Slide>
    </Layout>
  );
};

export default About;
