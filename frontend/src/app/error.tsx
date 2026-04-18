'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    toast.error('Something went wrong');
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center flex-col gap-4">
      <h2 className="text-xl font-semibold">Something went wrong</h2>

      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
