import Head from "next/head";

import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Defi - Stability Protocol</title>
        <meta name="description" content="DEFI - Stability Protocol" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
    </>
  );
}
