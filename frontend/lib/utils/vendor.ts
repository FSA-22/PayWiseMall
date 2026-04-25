// lib/utils/vendor.ts
export const getAvailabilityColor = (count: number) => {
  if (count < 50) return 'bg-red-500';
  if (count > 60) return 'bg-green-500';
  return 'bg-yellow-500';
};

export const getAvailabilityTextColor = (count: number) => {
  if (count < 50) return 'text-red-600';
  if (count > 60) return 'text-green-600';
  return 'text-yellow-600';
};
