export const Skeleton = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`animate-pulse rounded-lg bg-primary-2/40 dark:bg-primary-5/20 ${className}`}
    />
  );
};
