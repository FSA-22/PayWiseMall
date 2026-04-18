'use client';

import { notify } from '@/lib/utils/toast';

export default function ToastTest() {
  const fakeRequest = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('ok') : reject('fail');
      }, 2000);
    });

  return (
    <div className="flex flex-wrap gap-3 p-6">
      <button
        className="btn-primary"
        onClick={() => notify.success('Payment successful')}
      >
        Success Toast
      </button>

      <button
        className="btn-secondary"
        onClick={() => notify.error('Something went wrong')}
      >
        Error Toast
      </button>

      <button
        className="btn-tertiary"
        onClick={() => notify.warning('Session expiring soon')}
      >
        Warning Toast
      </button>

      <button
        className="btn-primary"
        onClick={() => notify.loading('Processing payment...')}
      >
        Loading Toast
      </button>

      <button
        className="btn-primary"
        onClick={() =>
          notify.promise(fakeRequest(), {
            loading: 'Processing...',
            success: 'Operation successful',
            error: 'Operation failed',
          })
        }
      >
        Promise Toast (Random)
      </button>
    </div>
  );
}
