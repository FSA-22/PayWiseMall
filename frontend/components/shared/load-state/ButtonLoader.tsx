import { motion } from 'motion/react';

export const ButtonLoader = () => {
  return (
    <motion.div
      className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.6, ease: 'linear' }}
    />
  );
};
