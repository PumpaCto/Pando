import Head from 'next/head';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Coming Soon – PumpaVerse</title>
      </Head>
      <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-orange-400 mb-4 animate-bounce">Coming Soon...</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-xl">
          The next chapter of the Pumpa story is being written.
          <br />
          NFTs. Game. Lore. Merch. And more.
        </p>
        <div className="w-16 h-16 border-4 border-orange-500 border-dashed rounded-full animate-spin"></div>
        <p className="mt-6 text-sm text-gray-500">Launching in 2025. Be ready.</p>
      </section>
    </>
  );
}
