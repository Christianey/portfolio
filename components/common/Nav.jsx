import { Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Nav = () => {
  return (
    <Flex
      justify={"space-between"}
      bg={"darkBlue"}
      py={4}
      px={10}
      bgColor="rgba(14,14,28, .8)"
      backdropBlur={"10px"}
      shadow={"lg"}
      h={"10vh"}
      zIndex={"10"}
    >
      <Image />
      <Flex
        as="nav"
        justify={"space-between"}
        align={"center"}
        color={"white"}
        w={"30%"}
      >
        <Link href={"#about"}>
          <Text>ABOUT</Text>
        </Link>
        <Link href={"#work"}>
          <Text>WORK</Text>
        </Link>
        <Link href={"#skills"}>
          <Text>SKILLS</Text>
        </Link>
        <Link href={"#contact"}>
          <Text>CONTACT</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Nav;
