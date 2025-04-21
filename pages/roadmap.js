import Head from 'next/head';

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>Pumpa Roadmap</title>
      </Head>
      <section className="min-h-screen px-6 pt-32 pb-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-10 text-center">Roadmap</h1>
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400">Q2 2025</h3>
            <ul className="list-disc pl-6">
              <li>Token Launch on pump.fun</li>
              <li>Community building through viral memes and Twitter raids</li>
              <li>Website, whitepaper, and branding release</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400">Q3 2025</h3>
            <ul className="list-disc pl-6">
              <li>NFT collection launch with animated character cards</li>
              <li>Initial gameplay teasers from open world game</li>
              <li>First exchange listing (DEX)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400">Q4 2025</h3>
            <ul className="list-disc pl-6">
              <li>Web game alpha version release</li>
              <li>Community merchandise drop</li>
              <li>Major influencer partnerships</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400">Q1 2026</h3>
            <ul className="list-disc pl-6">
              <li>Full game release with P2E mechanics</li>
              <li>DAO launch for community governance</li>
              <li>Multi-chain expansion</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
