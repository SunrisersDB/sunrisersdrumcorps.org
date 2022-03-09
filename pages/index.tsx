import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero/hero";
import Footer from "../components/footer/footer";
import Layout from "../components/layout";
import WaveSep from "../components/waveSep/waveSep";
import Stats from "../components/hero/stats/stats";
import History from "../components/hero/history/history";
import FAQ from "../components/hero/faq/faq";
import Navbar from "../components/navbar/navbar";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sunrisers - Home</title>
      </Head>

      <Navbar useBigLetter={false} />

      <Hero></Hero>

      <WaveSep className="" />

      <div className="bg-gradient-to-b from-blue to-slate-900">
        <Stats />

        {/* <History /> */}
        <FAQ />
      </div>

      <Footer />
    </Layout>
  );
}
