import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Pumpa</title>
      </Head>
      <section className="min-h-screen px-6 pt-32 pb-20 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-orange-400 mb-6">What is Pumpa Token?</h1>
        <p className="text-lg text-gray-300">
          Pumpa Token is more than a meme — it’s a movement. Created for those who have lost everything in crypto,
          Pumpa is the story of redemption.
          <br /><br />
          We’re building an anime-style cinematic universe, a lore-based open world web game,
          animated NFT collections, and a community-powered future.
        </p>
      </section>
    </>
  );
}
