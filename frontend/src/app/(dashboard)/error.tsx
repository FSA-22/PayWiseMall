'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function DashboardError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Dashboard error:', error);
    toast.error('Failed to load dashboard');
  }, [error]);

  return (
    <div className="flex-center h-fullflex-col gap-4">
      <p>We could not load your dashboard.</p>

      <Button onClick={() => reset()}>Retry</Button>
    </div>
  );
}
