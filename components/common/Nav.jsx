import {
  Flex,
  Text,
  Box,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      {/* mobile nav */}
      <Box display={["block", "block", "none"]}>
        <IconButton
          aria-label="Open nav menu"
          icon={<HiMenu color="white" size="1.5rem" />}
          bg="transparent"
          onClick={onOpen}
          _focus={{ boxShadow: "none" }}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        />

        <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xs"}>
          <ModalOverlay />
          <ModalContent bg={"transparent"}>
            <ModalBody
              bg={"rgb(14 14 28 / 60%)"}
              color={"white"}
              textAlign={"justify"}
              p={["1rem", "1rem", "2rem", "2rem"]}
              borderRadius={"lg"}
              overflow={"hidden"}
              backdropFilter={"blur(6px)"}
              border={"1px solid rgba(255, 255, 255, 0.3)"}
            >
              <Flex justify={"flex-end"}>
                <ModalCloseButton pos={"static"} color={"white"} />
              </Flex>

              <Flex
                direction="column"
                align="center"
                gridGap={"1rem"}
                sx={{ "& > .": { border: "1px solid white" } }}
              >
                <Link href={"/about"}>
                  <a onClick={onClose}>
                    <Text>ABOUT</Text>
                  </a>
                </Link>
                <Link href={"/work"}>
                  <a onClick={onClose}>
                    <Text>WORK</Text>
                  </a>
                </Link>
                <Link href={"/skills"}>
                  <a onClick={onClose}>
                    <Text>SKILLS</Text>
                  </a>
                </Link>
                <Link href={"/contact"}>
                  <a onClick={onClose}>
                    <Text>CONTACT</Text>
                  </a>
                </Link>
                <a
                  href="https://fegabyte.hashnode.dev/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                >
                  <Text>BLOG</Text>
                </a>
                <a
                  href={
                    "https://drive.google.com/uc?id=1gm1ugeTBdtD-FH7ZL1KV8I_5muaJ1pkr&export=download"
                  }
                  target={"_blank"}
                  rel="noreferrer"
                  download
                  onClick={onClose}
                >
                  <Text>DOWNLOAD CV</Text>
                </a>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
      {/* laptop nav */}
      <Flex
        as="nav"
        display={["none", "none", "flex"]}
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
        <a
          href="https://fegabyte.hashnode.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <Text>BLOG</Text>
        </a>
        <a
          href={
            "https://drive.google.com/uc?id=1gm1ugeTBdtD-FH7ZL1KV8I_5muaJ1pkr&export=download"
          }
          target={"_blank"}
          rel="noreferrer"
          download
        >
          <Text>DOWNLOAD CV</Text>
        </a>
      </Flex>
    </Flex>
  );
};

export default Nav;
