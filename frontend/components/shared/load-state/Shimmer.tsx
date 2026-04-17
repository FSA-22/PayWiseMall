import { motion } from 'motion/react';

export const Shimmer = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <div className="bg-primary-2/40 dark:bg-primary-5/20 h-full w-full" />

      <motion.div
        className="absolute inset-0"
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: 'linear',
        }}
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
        }}
      />
    </div>
  );
};
