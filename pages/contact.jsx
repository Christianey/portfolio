import { Grid, Slide, Text, Box } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { SiHashnode, SiGmail, SiWhatsapp } from "react-icons/si";
import Layout from "../components/common/Layout";
import styles from "./Hand.module.css";

const Contacts = () => {
  return (
    <Layout title="Fegabyte Tech - Contact">
      <Slide direction="bottom" in={true} style={{ position: "static" }}>
        <Box display="grid" placeContent="center" p={8}>
          <Grid
            columnGap={[4, 4, 4, 6]}
            rowGap={6}
            sx={{
              "&": {
                " .chakra-text": {
                  color: "white",
                  fontSize: ["1.2rem", "1.5rem", "1.5rem", "2rem"],
                },
                svg: { color: "primary", width: "3rem", height: "3rem" },
              },
            }}
            maxWidth="50rem"
            templateColumns={"3rem 1fr"}
            templateRows={"3rem 1fr"}
            alignItems="center"
          >
            <SiGmail className={styles.skills} />
            <a
              href="mailto:fegabytech@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Text className={styles.skills}>fegabytech@gmail.com</Text>
            </a>
            <AiFillGithub className={styles.skills} />
            <a
              href="https://github.com/Christianey"
              target="_blank"
              rel="noreferrer"
            >
              <Text className={styles.skills}>@Christianey</Text>
            </a>
            <AiFillLinkedin className={styles.skills} />
            <a
              href="https://www.linkedin.com/in/christian-eyube/"
              target="_blank"
              rel="noreferrer"
            >
              <Text className={styles.skills}>@christian-eyube</Text>
            </a>
            <BsTwitter className={styles.skills} />
            <a
              href="https://twitter.com/EyubeChristian"
              target="_blank"
              rel="noreferrer"
            >
              <Text className={styles.skills}>@EyubeChristian</Text>
            </a>
            <SiHashnode className={styles.skills} />
            <a
              href="https://fegabyte.hashnode.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <Text className={styles.skills}>@fegabyte</Text>
            </a>
            
            <SiWhatsapp className={styles.skills} />
            <a
              href="https://api.whatsapp.com/send?phone=2349071009474"
              target="_blank"
              rel="noreferrer"
            >
              <Text className={styles.skills}>+2349071009474</Text>
            </a>
          </Grid>
        </Box>
      </Slide>
    </Layout>
  );
};

export default Contacts;
