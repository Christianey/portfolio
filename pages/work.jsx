import { Flex, Slide, Text } from "@chakra-ui/react";
import Layout from "../components/common/Layout";
import WorkCard from "../components/work/WorkCard";

const Work = () => {
  return (
    <Layout title="Fegabyte Tech - Work">
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
              "Simple Google Clone: A mini search engine built with Google API"
            }
            title={"Google Clone"}
            tools={["NextJS 13", "Tailwind", "Google API"]}
            imageLink={"/google-clone.png"}
            githubLink={"https://github.com/Christianey/mygoogle.git"}
            websiteLink={"https://mygoogle-r8c6-christianey.vercel.app/"}
          />
          <WorkCard
            description={
              "A Simple responsive dashboard with Charts."
            }
            title={"Simple Responsive Dashboard"}
            tools={["ReactJS", "Chakra-UI", "ChartJS"]}
            imageLink={"/mainstack.png"}
            githubLink={"https://github.com/Christianey/mainstack-dashboard.git"}
            websiteLink={"https://mainstack-dashboard-ochre.vercel.app/"}
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
    </Layout>
  );
};

export default Work;
