import Head from 'next/head';
import Image from 'next/image';

export default function Community() {
  return (
    <>
      <Head>
        <title>Join the Pumpa Community</title>
      </Head>
      <section className="min-h-screen bg-black text-white px-4 pt-32 pb-20 animate-fade">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-400 mb-6">Join the Pumpa Community</h1>
          <p className="text-lg text-gray-300 mb-10">
            Be part of something bigger. Engage, meme, trade, build — together.
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <a href="https://t.me/pumpatoken" target="_blank" className="flex items-center gap-2 bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-3 rounded-xl shadow-md transition-all">
              <Image src="/icon-telegram.png" width={24} height={24} alt="Telegram" /> Telegram
            </a>
            <a href="https://x.com/Pumpa_Cto" target="_blank" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-md transition-all">
              <Image src="/icon-twitter.png" width={24} height={24} alt="Twitter" /> Twitter
            </a>
            <a href="https://www.tiktok.com/@pumpa.token" target="_blank" className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl shadow-md transition-all">
              <Image src="/icon-tiktok.png" width={24} height={24} alt="TikTok" /> TikTok
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
