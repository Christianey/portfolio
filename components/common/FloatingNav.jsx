import { Flex, Text } from "@chakra-ui/react";
import { SiAboutdotme } from "react-icons/si";
import { IoMdBriefcase } from "react-icons/io";
import { GoTools } from "react-icons/go";
import { MdPermContactCalendar } from "react-icons/md";
import Link from "next/link";
import styles from "../../pages/Hand.module.css";

const FloatingNav = () => {
  return (
    <Flex
      className={styles.floating}
      shadow={"lg"}
      w={["100%", "70%", "80%", "50%"]}
      zIndex={30}
      sx={{
        "& .link-wrapper": {
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
            borderRadius: ".5rem",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 5,
            w: "full",
            h: "full",
            background:
              "linear-gradient(#0e0e1c21, #0e0e1c24) padding-box,linear-gradient(90deg, #00c95dbf, #3a91a082) border-box",
            borderImage: "linear-gradient(90deg, #00C95D, #3A91A0) 0",
            borderStyle: "solid",
            backdropFilter: "opacity(0.6)",
          },
        }}
      ></Flex>
      <Link href={"/about"}>
        <Flex
          className="link-wrapper"
          direction="column"
          gridGap={2.5}
          flexBasis={"calc(100% / 4)"}
          align="center"
        >
          <SiAboutdotme color="white" size={"1.5rem"} />
          <Text>ABOUT</Text>
        </Flex>
      </Link>
      <Link href={"/work"}>
        <Flex
          className="link-wrapper"
          direction="column"
          gridGap={2.5}
          flexBasis={"calc(100% / 4)"}
          align="center"
        >
          <IoMdBriefcase color="white" size={"1.5rem"} />
          <Text>WORK</Text>
        </Flex>
      </Link>
      <Link href={"/skills"}>
        <Flex
          className="link-wrapper"
          direction="column"
          gridGap={2.5}
          flexBasis={"calc(100% / 4)"}
          align="center"
        >
          <GoTools color="white" size={"1.5rem"} />
          <Text>SKILLS</Text>
        </Flex>
      </Link>
      <Link href={"/contact"}>
        <Flex
          className="link-wrapper"
          direction="column"
          gridGap={2.5}
          flexBasis={"calc(100% / 4)"}
          align="center"
        >
          <MdPermContactCalendar color="white" size={"1.5rem"} />
          <Text>CONTACT</Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default FloatingNav;
