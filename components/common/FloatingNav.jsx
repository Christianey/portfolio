import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../../pages/Hand.module.css";

const FloatingNav = () => {
  return (
    <Flex
      className={styles.floating}
      pos={"absolute"}
      bottom={10}
      justify={"space-between"}
      shadow={"lg"}
      borderRadius={"full"}
      w={["90%", "70%", "80%", "50%"]}
      align={"center"}
      left={"50%"}
      transform={"translate(-50%, 0)"}
      border={"thin solid rgba(255,255,255, 0.2)"}
      bg={"cadetblue"}
      zIndex={30}
      sx={{
        "& .chakra-text": {
          zIndex: 10,
          color: "darkBlue",
          cursor: "pointer",
          lineHeight: "initial",
          fontWeight: "bold",
          px: [2, 2, 4, 6],
          py: [2, 3, 4, 4],
          fontSize: [".8rem", "1rem", "1rem", "1rem"],
          _notLast: {
            borderRight: "1px solid rgba(255,255,255, .1)",
            paddingRight: "1rem",
          },
        },
      }}
    >
      <Flex
        sx={{
          "&": {
            border: "2px solid transparent",
            borderRadius: "full",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 5,
            w: "full",
            h: "full",
            background:
              "linear-gradient(#0e0e1c21, #0e0e1c24) padding-box,linear-gradient(90deg, #00c95dbf, #3a91a082) border-box",
            // background:
            //   "linear-gradient(#0E0E1C, #0E0E1C) padding-box, linear-gradient(90deg, #00C95D, #3A91A0) border-box",
            borderImage: "linear-gradient(90deg, #00C95D, #3A91A0) 0",
            borderStyle: "solid",
            backdropFilter: "opacity(0.6)",
          },
        }}
      ></Flex>
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
  );
};

export default FloatingNav;
