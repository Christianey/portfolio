import { Flex, Slide, Text } from "@chakra-ui/react";
import WorkCard from "../components/work/WorkCard";

const Work = () => {
  return (
    <Slide direction="left" in={true} style={{ position: "static" }}>
      <Flex
        wrap={"wrap"}
        py={[6, 6, 6, 10]}
        gridGap={8}
        maxW={"50rem"}
        justify={"space-around"}
        mx={"auto"}
      >
        <WorkCard
          description={
            "A web application for uploading and downloading books in pdf format."
          }
          title={"Unibook E-library App"}
          tools={["ReactJS", "MUI", "Express", "MongoDB"]}
          imageLink={"/unibook.png"}
          githubLink={"https://github.com/Christianey/e_library_app.git"}
          websiteLink={"https://unibook.netlify.app"}
        />
        <WorkCard
          description={
            "An instagram clone. Still in progress. Registration and login completed."
          }
          title={"Pixta - Instagram Clone"}
          tools={["ReactJS", "Tailwind", "Express", "MongoDB"]}
          imageLink={"/pixta.png"}
          githubLink={"https://github.com/Christianey/pixta_social.git"}
          websiteLink={"https://pixta.netlify.app"}
        />
        <WorkCard
          description={
            "A responsive single page webiste with functional form that verifies Debit card input and gives appropriate error for invalid errors for each input field respectively."
          }
          title={"Simple Checkout Page"}
          tools={["ReactJS", "Chakra UI"]}
          imageLink={"/landing-lights.png"}
          githubLink={"https://github.com/Christianey/landing-light.git"}
          websiteLink={"https://landing-lights.netlify.app"}
        />
      </Flex>
      <Text fontStyle="italic" textAlign={"center"} color={"white"}>
        NB: I&apos;ve also worked on other amazing projects and applications
        which are available on request.
      </Text>
    </Slide>
  );
};

export default Work;
