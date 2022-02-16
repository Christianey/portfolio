import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <Flex
      justify={"space-between"}
      bg={"darkBlue"}
      py={4}
      px={[3, 3, 6, 10]}
      bgColor="rgba(14,14,28, .5)"
      sx={{ backdropFilter: "blur(30px)" }}
      shadow={"lg"}
      h={["8vh", "10vh", "10vh", "10vh"]}
      pos={"fixed"}
      zIndex={"55"}
      align={"center"}
      w="full"
      top={0}
      borderBottom={"1px solid rgba(255,255,255, .1)"}
    >
      <Box
        boxSize={["2rem", "2.5rem", "2.5rem", "2.5rem"]}
        position={"relative"}
      >
        <Link href={"/"}>
          <a>
            <Image
              src="/Asset 1.svg"
              width={"100%"}
              height={"100%"}
              layout="fill"
            />
          </a>
        </Link>
      </Box>
      {/* <RiHomeLine size="2rem" color="white" /> */}
      <Flex
        as="nav"
        justify={"space-between"}
        align={"center"}
        color={"white"}
        minW={"30%"}
        gridGap={4}
        sx={{
          "& > a > .chakra-text": {
            fontSize: [".8rem", ".8rem", "1rem", "1rem"],
            _hover: {
              color: "primary",
              cursor: "pointer",
            },
          },
        }}
      >
        <Link href={"/about"}>
          <a>
            <Text>ABOUT</Text>
          </a>
        </Link>
        <Link href={"/work"}>
          <a>
            <Text>WORK</Text>
          </a>
        </Link>
        <Link href={"/skills"}>
          <a>
            <Text>SKILLS</Text>
          </a>
        </Link>
        <Link href={"/contact"}>
          <a>
            <Text>CONTACT</Text>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
