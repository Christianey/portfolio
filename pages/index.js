import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fegabyte Tech</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="http://fonts.cdnfonts.com/css/nexa-bold"
          rel="stylesheet"
        ></link>
      </Head>
      <Hero />
    </div>
  );
}
