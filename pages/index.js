import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pumpa Token | Your Last Chance, Your Real One</title>
        <meta name="description" content="Pumpa Token - Anime, Crypto, GameFi, AI. Now live on Pump.fun!" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-gradient-to-b from-black to-gray-900 text-white">
        {/* Logo */}
        <Image
          src="/pumpa-logo.png"
          alt="Pumpa Logo"
          width={120}
          height={120}
          className="mb-4 rounded-full shadow-xl border border-orange-400"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange-400 text-center mb-4 animate-pulse">
          Pumpa Token is LIVE!
        </h1>

        {/* Subtext */}
        <p className="text-center text-lg text-orange-100 max-w-2xl mb-6">
          A meme with a mission. Anime meets crypto. Play, watch, earn. Powered by Web3, AI, and community.
        </p>

        {/* Buy Now Button */}
        <a
          href="https://pump.fun/HcYaAftDhNeHapQBcrvQCNYAoF1LmEh7aTrDMXJrpump"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition mb-4"
        >
          Buy Now on Pump.fun
        </a>

        {/* Contract Address */}
        <div className="bg-black/50 border border-orange-400 text-orange-300 px-4 py-2 rounded-xl text-sm font-mono shadow-md text-center">
          <strong>CA:</strong> HcYaAftDhNeHapQBcrvQCNYAoF1LmEh7aTrDMXJrpump
        </div>

        {/* Spacer for layout */}
        <div className="mt-10 text-center text-orange-200 text-sm opacity-70">
          Powered by the community. Inspired by anime. Fueled by memes.
        </div>
      </main>
    </>
  );
}
