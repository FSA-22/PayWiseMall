'use client';

import { ButtonLoader } from '@/components/shared/load-state/ButtonLoader';
import { Skeleton } from '@/components/shared/load-state/Skeleton';
import { TopLoader } from '@/components/shared/load-state/TopLoader';

const loading = true;

const Home = () => {
  return (
    <div className="p-10 space-y-6">
      {loading && <TopLoader />}

      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      <button className="btn-primary flex-center ">
        {loading && <ButtonLoader />}
        {loading ? 'Processing...' : 'Continue'}
      </button>
    </div>
  );
};

export default Home;
