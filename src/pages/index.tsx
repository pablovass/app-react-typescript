import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";
const Home: NextPage = () => {
  return (
    <div >
      <Head>

        <title>index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className="text-3xl font-bold underline">hola mundo</h1>
        <RandomFox/>
      </main>
      <footer></footer>
    </div>

  );
}
export default Home
