import Image from 'next/image';

export default function Community() {
  return (
    <section className="section text-center">
      <h1 className="section-title">Join the Pumpa Community</h1>
      <p className="section-subtitle max-w-2xl mx-auto">
        Be part of a movement that’s built on broken dreams and fueled by collective hope. Join our Telegram, follow us on X, and vibe with us on TikTok.
      </p>

      <div className="flex justify-center gap-6 mt-10 flex-wrap">
        <a href="https://t.me/pumpatoken" target="_blank" rel="noopener noreferrer">
          <Image src="/icon-telegram.svg" alt="Telegram" width={48} height={48} />
        </a>
        <a href="https://x.com/Pumpa_Cto" target="_blank" rel="noopener noreferrer">
          <Image src="/icon-twitter.svg" alt="Twitter" width={48} height={48} />
        </a>
        <a href="https://www.tiktok.com/@pumpa.token" target="_blank" rel="noopener noreferrer">
          <Image src="/icon-tiktok.svg" alt="TikTok" width={48} height={48} />
        </a>
      </div>

      <div className="mt-10">
        <Image
          src="/community-art.png"
          alt="Pumpa Community"
          width={600}
          height={400}
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
