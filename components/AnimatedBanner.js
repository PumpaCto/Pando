import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedBanner() {
  return (
    <motion.div
      className="py-20"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          src="/pumpa-logo.png"
          alt="Pumpa Logo"
          width={100}
          height={100}
          className="animate-spin-slow"
        />
        <h1 className="text-5xl font-bold text-orange-400 drop-shadow-lg">
          Welcome to Pumpaverse
        </h1>
        <p className="text-gray-300 max-w-xl text-center">
          The final frontier of memes, tokens, and community-powered glory.
        </p>
      </div>
    </motion.div>
  );
}
