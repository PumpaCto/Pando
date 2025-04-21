import AnimatedBanner from '../components/AnimatedBanner';
import ScrollQuote from '../components/ScrollQuote';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import TokenomicsChart from '../components/TokenomicsChart';
import PartnerLogos from '../components/PartnerLogos';
import Leaderboard from '../components/Leaderboard';

export default function Home() {
  return (
    <div className="space-y-20">
      <ScrollQuote />
      <AnimatedBanner />
      <Stats />
      <Testimonials />
      <TokenomicsChart />
      <PartnerLogos />
      <Leaderboard />
    </div>
  );
}
