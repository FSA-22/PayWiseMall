'use client';

import { motion } from 'framer-motion';

export const TopLoader = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 h-0.75 bg-primary-5 z-999"
      initial={{ width: '0%' }}
      animate={{ width: '100%' }}
      transition={{ duration: 1 }}
    />
  );
};
