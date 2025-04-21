import '@/styles/globals.css';
import '@/styles/animations.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import StickyBuy from '@/components/StickyBuy';
import Preloader from '@/components/Preloader';
import AlertModal from '@/components/AlertModal';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Preloader />
      <AlertModal />
      <Navbar />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <ScrollToTop />
      <StickyBuy />
      <Footer />
    </>
  );
}
