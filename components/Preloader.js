import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 saniye sonra kaybolur
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">
      <Image src="/pumpa-logo.png" alt="Pumpa Logo" width={80} height={80} className="animate-spin-slow" />
      <p className="mt-4 text-orange-400 text-sm animate-pulse">Loading Pumpaverse...</p>
    </div>
  );
}
