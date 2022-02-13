import { Flex, Image as Img, Text } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <Flex
      color={"white"}
      gridGap={6}
      cursor={"pointer"}
      transition={"all .2s ease-in-out"}
      sx={{
        "&": {
          _hover: {
            gridGap: "2rem",
            "& > .img-wrapper": {
              boxShadow: "lg",
              transform: "scale(1.1)",
              "&::before": {
                opacity: 0,
              },
            },
          },
        },
      }}
    >
      <Flex
        className="img-wrapper"
        width={"100%"}
        height={"100%"}
        borderRadius={"lg"}
        color={"white"}
        overflow={"hidden"}
        pos={"relative"}
        transition={"transform .3s ease-in-out"}
        _before={{
          content: "''",
          pos: "absolute",
          w: "100%",
          h: "100%",
          bg: "secondary",
          opacity: "0.4",
          zIndex: 1,
          transition: "opacity 0.2s ease-in-out",
        }}
      >
        <Img
          as={Image}
          width={"100%"}
          height={"100%"}
          layout={"fill"}
          objectFit={"cover"}
          src="/bg.jpeg"
        />
      </Flex>
      <Flex direction={"column"}>
        <Text
          mb={2}
          textTransform={"uppercase"}
          borderBottom={"3px solid"}
          borderBottomColor={"primary"}
          alignSelf={"start"}
          fontSize={"1.2rem"}
          fontWeight={"bold"}
          color={"primary"}
        >
          {" "}
          Simple Checkout Page
        </Text>
        <Text mb={4} textAlign={"justify"} color={"#7edbeb"}>
          A responsive single page webiste with functional form that verifies
          Debit card input and gives appropriate error for invalid errors for
          each input field respectively.
        </Text>
        <Flex
          gridGap={3}
          mb={4}
          sx={{
            "& > .chakra-text": {
              color: "#7edbeb",
            },
          }}
        >
          <Text>REACTJS</Text>
          <Text>CHAKRA-UI</Text>
        </Flex>
        <Flex gridGap={3}>
          <AiFillGithub size={"1.5rem"} />
          <HiOutlineExternalLink size={"1.5rem"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Work = () => {
  return (
    <Flex
      wrap={"wrap"}
      py={[4, 4, 4, 6]}
      gridGap={4}
      maxW={"50rem"}
      justify={"space-around"}
      flexWrap={"wrap"}
      mx={"auto"}
      // mb="10"
    >
      <ProjectCard />
    </Flex>
  );
};

export default Work;
