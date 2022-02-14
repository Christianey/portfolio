import { Flex, Slide, Text } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { SiHashnode, SiGmail } from "react-icons/si";

const Contacts = () => {
  return (
    <Slide direction="bottom" in={true} style={{ position: "static" }}>
      <Flex
        gridGap={6}
        py={4}
        sx={{
          "&": {
            "> div": {
              alignItems: "center",
              gridGap: 4,
              justifyContent: "center",
            },
            " .chakra-text": {
              color: "white",
              fontSize: ["1rem", "1rem", "1rem", "1.5rem"],
            },
            svg: { color: "primary", width: "3rem", height: "3rem" },
          },
        }}
        flexWrap={["1rem", "1rem", "1rem", "wrap"]}
        justify={"space-around"}
        maxWidth="50rem"
        mx="auto"
        direction={"column"}
      >
        <Flex>
          <AiFillGithub />
          <a href="https://github.com/Christianey" target="_blank">
            <Text>eyubechristian@gmail.com</Text>
          </a>
        </Flex>
        <Flex>
          <AiFillLinkedin />
          <a href="https://github.com/Christianey" target="_blank">
            <Text>eyubechristian@gmail.com</Text>
          </a>
        </Flex>
        <Flex>
          <BsTwitter />
          <a href="https://github.com/Christianey" target="_blank">
            <Text>eyubechristian@gmail.com</Text>
          </a>
        </Flex>

        <Flex>
          <SiHashnode />
          <a href="https://github.com/Christianey" target="_blank">
            <Text>eyubechristian@gmail.com</Text>
          </a>
        </Flex>
        <Flex>
          <SiGmail />
          <a
            // href="mailto:eyubechristian@gmail.com"
            href="https://mail.google.com/mail/u/0/#compose"
            target="_blank"
          >
            <Text>eyubechristian@gmail.com</Text>
          </a>
        </Flex>
      </Flex>
    </Slide>
  );
};

export default Contacts;
