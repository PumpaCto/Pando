import Image from 'next/image';

export default function TokenomicsChart() {
  return (
    <section className="my-20 px-4 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Tokenomics</h2>
      <Image
        src="/token-chart.png"
        alt="Pumpa Tokenomics"
        width={600}
        height={400}
        className="mx-auto rounded-lg border border-orange-500 shadow-lg"
      />
      <p className="text-gray-300 text-sm mt-4">
        50% Liquidity | 25% Community Rewards | 15% Dev Wallet | 10% Airdrops
      </p>
    </section>
  );
}
