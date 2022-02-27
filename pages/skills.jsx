import {
  Flex,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Slide,
} from "@chakra-ui/react";
import { IoIosSpeedometer, IoLogoNodejs } from "react-icons/io";
import { FiTarget, FiFigma } from "react-icons/fi";
// import { SiSnapcraft } from "react-icons/si";
import { MdDevices, MdTouchApp } from "react-icons/md";
import {
  SiChakraui,
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import { FaReact, FaSass } from "react-icons/fa";
import { DiCss3, DiIllustrator, DiPhotoshop } from "react-icons/di";
import { ImHtmlFive } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import Layout from "../components/common/Layout";
// import { HiLightBulb } from "react-icons/hi";

const SkillIcon = ({ icon, description }) => {
  return (
    <Flex
      direction={"column"}
      py={[4, 4, 4, 6]}
      gridGap={2}
      maxWidth={"8rem"}
      align={"center"}
    >
      <Flex
        color={"primary"}
        align={"center"}
        justify={"center"}
        boxSize={"6rem"}
        bg={"primary"}
        clipPath={
          "polygon(92.32051% 40%, 93.79385% 43.1596%, 94.69616% 46.52704%, 95% 50%, 94.69616% 53.47296%, 93.79385% 56.8404%, 92.32051% 60%, 79.82051% 81.65064%, 77.82089% 84.50639%, 75.35575% 86.97152%, 72.5% 88.97114%, 69.3404% 90.44449%, 65.97296% 91.34679%, 62.5% 91.65064%, 37.5% 91.65064%, 34.02704% 91.34679%, 30.6596% 90.44449%, 27.5% 88.97114%, 24.64425% 86.97152%, 22.17911% 84.50639%, 20.17949% 81.65064%, 7.67949% 60%, 6.20615% 56.8404%, 5.30384% 53.47296%, 5% 50%, 5.30384% 46.52704%, 6.20615% 43.1596%, 7.67949% 40%, 20.17949% 18.34936%, 22.17911% 15.49361%, 24.64425% 13.02848%, 27.5% 11.02886%, 30.6596% 9.55551%, 34.02704% 8.65321%, 37.5% 8.34936%, 62.5% 8.34936%, 65.97296% 8.65321%, 69.3404% 9.55551%, 72.5% 11.02886%, 75.35575% 13.02848%, 77.82089% 15.49361%, 79.82051% 18.34936%)"
        }
        pos={"relative"}
        _after={{
          content: "''",
          w: "90%",
          h: "90%",
          pos: "absolute",
          bg: "darkBlue",
          clipPath:
            "polygon(92.32051% 40%, 93.79385% 43.1596%, 94.69616% 46.52704%, 95% 50%, 94.69616% 53.47296%, 93.79385% 56.8404%, 92.32051% 60%, 79.82051% 81.65064%, 77.82089% 84.50639%, 75.35575% 86.97152%, 72.5% 88.97114%, 69.3404% 90.44449%, 65.97296% 91.34679%, 62.5% 91.65064%, 37.5% 91.65064%, 34.02704% 91.34679%, 30.6596% 90.44449%, 27.5% 88.97114%, 24.64425% 86.97152%, 22.17911% 84.50639%, 20.17949% 81.65064%, 7.67949% 60%, 6.20615% 56.8404%, 5.30384% 53.47296%, 5% 50%, 5.30384% 46.52704%, 6.20615% 43.1596%, 7.67949% 40%, 20.17949% 18.34936%, 22.17911% 15.49361%, 24.64425% 13.02848%, 27.5% 11.02886%, 30.6596% 9.55551%, 34.02704% 8.65321%, 37.5% 8.34936%, 62.5% 8.34936%, 65.97296% 8.65321%, 69.3404% 9.55551%, 72.5% 11.02886%, 75.35575% 13.02848%, 77.82089% 15.49361%, 79.82051% 18.34936%)",
        }}
      >
        {icon}
      </Flex>
      <Text textAlign={"center"} color="white">
        {description}
      </Text>
    </Flex>
  );
};
const Skills = () => {
  return (
    <Layout title="Fegabyte Tech - Skills">
      <Slide direction="right" in={true} style={{ position: "static" }}>
        <Flex
          maxW={"50rem"}
          justify={"space-around"}
          flexWrap={"wrap"}
          mx={"auto"}
          mb="10"
        >
          <SkillIcon
            icon={<IoIosSpeedometer size={"2rem"} style={{ zIndex: 1 }} />}
            description={"Optimize pages for faster performance"}
          />
          <SkillIcon
            icon={<FiTarget size={"2rem"} style={{ zIndex: 1 }} />}
            description={"Attention to details"}
          />
          <SkillIcon
            icon={<MdDevices size={"2rem"} style={{ zIndex: 1 }} />}
            description={"Responsive Design"}
          />
          <SkillIcon
            icon={<MdTouchApp size={"2rem"} style={{ zIndex: 1 }} />}
            description={"Dynamic and Interactive Websites"}
          />
        </Flex>
        <Box maxW={"50rem"} mx={"auto"}>
          <Tabs variant={"enclosed"} isFitted align="center">
            <TabList
              as={Flex}
              borderBottomColor={"secondary"}
              sx={{
                "& > button": {
                  _focus: { boxShadow: "none" },
                  color: "white",
                  outline: "none",
                  _selected: {
                    color: "primary",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    borderBottomColor: "secondary !important",
                    transition: "all 3ms ease-in",
                    borderBottom: "5px solid",
                    borderRadius: "md",
                  },
                },
              }}
            >
              <Tab>Programming</Tab>
              <Tab>Design</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Flex
                  py={4}
                  gridGap={6}
                  sx={{ "& > svg": { color: "primary", size: "5rem" } }}
                  flexWrap={"wrap"}
                  justify={"space-around"}
                >
                  <ImHtmlFive size={"5rem"} />
                  <DiCss3 size={"5rem"} />
                  <FaSass size={"5rem"} />
                  <SiJavascript size={"5rem"} />
                  <FaReact size={"5rem"} />
                  <SiRedux size={"5rem"} />
                  <SiNextdotjs size={"5rem"} />
                  <IoLogoNodejs size={"5rem"} />
                  <SiMongodb size={"5rem"} />
                  <SiExpress size={"5rem"} />
                  <BsGithub size={"5rem"} />
                  <SiTailwindcss size={"5rem"} />
                  <SiMaterialui size={"5rem"} />
                  <SiChakraui size={"5rem"} />
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  gridGap={6}
                  py={4}
                  sx={{ "& > svg": { color: "primary", size: "5rem" } }}
                  flexWrap={"wrap"}
                  justify={"space-around"}
                >
                  <DiPhotoshop size={"5rem"} />
                  <DiIllustrator size={"5rem"} />
                  <FiFigma size={"5rem"} />
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Slide>
    </Layout>
  );
};

export default Skills;
