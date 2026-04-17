'use client';

import { motion } from 'motion/react';

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-999 flex-center bg-white/70 backdrop-blur-md dark:bg-black/40">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-primary-2 border-t-primary-5"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: 'linear',
        }}
      />
    </div>
  );
};
