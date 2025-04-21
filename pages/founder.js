import Head from 'next/head';

export default function Founder() {
  return (
    <>
      <Head>
        <title>The Founder</title>
      </Head>
      <section className="min-h-screen bg-black text-orange-400 px-4 pt-40 pb-20 text-center animate-pulse">
        <h1 className="text-4xl font-extrabold mb-6 tracking-wider">He was never seen. Only felt.</h1>
        <p className="text-lg text-gray-400">
          0x...a7c1 whispered across the blockchain.  
          <br />
          Every Pumpa trade echoes his presence.
        </p>
        <div className="mt-10 text-sm text-gray-600 italic">
          Access granted through chaos.
        </div>
      </section>
    </>
  );
}
