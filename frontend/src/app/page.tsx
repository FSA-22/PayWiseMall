'use client';

import ToastTest from '@/components/dev/toast-test';
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

      <button className="btn-primary flex-center">
        {loading && <ButtonLoader />}
        {loading ? 'Processing...' : 'Continue'}
      </button>

      <input className="input input-error" />
      <p className="error-text">Invalid email address</p>

      <div className="alert-error">
        <span className="alert-error-icon">⚠️</span>
        <div>
          <p className="font-semibold">Payment failed</p>
          <p className="text-sm opacity-80">
            Please check your card details and try again.
          </p>
        </div>
      </div>

      <div className="space-y-1">
        <input className="input-base input-error-focus" />
        <p className="error-text">Card number is incomplete</p>
      </div>

      <ToastTest />
    </div>
  );
};

export default Home;
