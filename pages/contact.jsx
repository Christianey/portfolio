import { Flex, Text } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { SiHashnode } from "react-icons/si";

const Contacts = () => {
  return (
    <Flex
      gridGap={6}
      py={4}
      sx={{ "& > svg": { color: "primary", size: "5rem" } }}
      flexWrap={"wrap"}
      justify={"space-around"}
    >
      <AiFillLinkedin size={"5rem"} />
      <BsTwitter size={"5rem"} />
      <AiFillGithub size={"5rem"} />
      <SiHashnode size={"5rem"} />
      <HiMail size={"5rem"} />
    </Flex>
  );
};

export default Contacts;
