import Head from "next/head";
import navbar from "./navbar";
import jumbotron from "./jumbotron";
import recc from './recc'
// import testDb from '../prisma/index'

export default function Home() {
  // testDb
  return (
    <div className="font-mono">
      <Head>
        <title>AsZShop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white min-h-screen">
        {navbar()}
        {jumbotron()}
        {recc()}
      </main>
    </div>
  );
}