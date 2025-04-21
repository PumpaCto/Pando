import Head from 'next/head';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import AnimatedBanner from '../components/AnimatedBanner';
import TokenomicsChart from '../components/TokenomicsChart';
import PartnerLogos from '../components/PartnerLogos';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pumpa Token - Home</title>
      </Head>
      <main className="pt-28 px-4 text-center">
        <AnimatedBanner />
        <Stats />
        <TokenomicsChart />
        <PartnerLogos />
        <Testimonials />
      </main>
    </>
  );
}
