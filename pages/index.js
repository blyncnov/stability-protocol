import Head from "next/head";

import HeroSection from "../components/HeroSection";
import Vision from "../components/Vision";
import AboutProject from "../components/About";
import Roadmap from "../components/Roadmap";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <>
      <Head>
        <title>Defi - Stability Protocol</title>
        <meta name="description" content="DEFI - Stability Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <Vision />
      <AboutProject />
      <Roadmap />
      <Partners />
    </>
  );
}
