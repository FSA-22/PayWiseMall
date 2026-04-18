'use client';

import { useEffect } from 'react';
import { toast } from 'sonner';

export default function AuthError({ error }: { error: Error }) {
  useEffect(() => {
    console.error('Auth error:', error);
    toast.error('Authentication error');
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Something went wrong during authentication.</p>
    </div>
  );
}
