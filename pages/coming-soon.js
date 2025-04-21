import Image from 'next/image';

export default function ComingSoon() {
  return (
    <section className="section text-center">
      <h1 className="section-title">PumpaVerse is Coming</h1>
      <p className="section-subtitle max-w-2xl mx-auto">
        An open-world, story-driven, anime-inspired crypto game built on community dreams and degenerate glory.  
        Our devs haven’t slept in days — and it’s almost ready.
      </p>

      <div className="mt-10">
        <Image
          src="/hero-banner.png"
          alt="PumpaVerse Teaser"
          width={800}
          height={400}
          className="mx-auto rounded-xl border border-orange-500 shadow-lg"
        />
        <p className="text-orange-400 mt-6 font-semibold text-lg">Launch: Q3 2025</p>
      </div>
    </section>
  );
}
