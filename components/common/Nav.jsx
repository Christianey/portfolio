import { Flex, Text } from "@chakra-ui/react";
import { RiHomeLine } from "react-icons/ri";
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
      h={"10vh"}
      zIndex={"10"}
      pos={"sticky"}
      align={"center"}
      top={0}
    >
      <Link href={"/"}>
        <RiHomeLine size="2rem" color="white" />
      </Link>
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
