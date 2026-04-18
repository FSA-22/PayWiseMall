import { toast } from 'sonner';

export const showSuccess = (message: string) => {
  toast.success(message, {
    className: 'toast-success',
  });
};

export const showError = (message: string) => {
  toast.error(message, {
    className: 'toast-error',
  });
};

export const showWarning = (message: string) => {
  toast(message, {
    className: 'toast-warning',
  });
};

export const notify = {
  success: (msg: string) => toast.success(msg, { className: 'toast-success' }),

  error: (msg: string) => toast.error(msg, { className: 'toast-error' }),

  warning: (msg: string) => toast(msg, { className: 'toast-warning' }),

  loading: (msg: string) => toast.loading(msg),

  promise: <T>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
    }: {
      loading: string;
      success: string | ((data: T) => string);
      error: string;
    },
  ) =>
    toast.promise(promise, {
      loading,
      success,
      error,
    }),
};
