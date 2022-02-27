import Head from "next/head";
import { Box } from "@chakra-ui/react";

function Layout({ children, title }) {
  return (
    <Box>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Box>
  );
}

export default Layout;
