import { Box, Flex, Image as Img, Text } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";

const WorkCard = () => {
  return (
    <Flex
      color={"white"}
      gridGap={["1rem", "2%", "2%", "2%"]}
      cursor={"pointer"}
      transition={"all .2s ease-in-out"}
      wrap={"wrap"}
      w="100%"
      justify={"space-between"}
      sx={{
        "&": {
          " > div": {
            flexBasis: ["100%", "48%", "48%", "48%"],
          },
          _hover: {
            // gridGap: "2rem",
            "& > .img-wrapper > div": {
              boxShadow: "lg",
              // transform: "scale(1.1)",
              "&::before": {
                opacity: 0,
              },
            },
          },
        },
      }}
    >
      <Box className="img-wrapper" minH={"10rem"}>
        <Flex
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
      </Box>
      <Flex direction={"column"}>
        <Text
          mb={2}
          textTransform={"uppercase"}
          alignSelf={"start"}
          fontSize={"1.3rem"}
          fontWeight={"bolder"}
          color={"primary"}
        >
          {" "}
          Simple Checkout Page
        </Text>
        <Text mb={4} textAlign={"justify"} color={"white"}>
          A responsive single page webiste with functional form that verifies
          Debit card input and gives appropriate error for invalid errors for
          each input field respectively.
        </Text>
        <Flex
          gridGap={3}
          sx={{
            "& > .chakra-text": {
              color: "secondary",
            },
          }}
        >
          <Text>REACTJS</Text>
          <Text>CHAKRA-UI</Text>
        </Flex>
        <Flex gridGap={3} justify={"flex-end"}>
          <AiFillGithub size={"1.5rem"} />
          <HiOutlineExternalLink size={"1.5rem"} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WorkCard;
