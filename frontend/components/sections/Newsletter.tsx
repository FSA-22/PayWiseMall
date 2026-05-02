'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { NewsletterFormValues, newsletterSchema } from '@/types/newsletter';
const NewsletterSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    mode: 'onSubmit',
  });

  const [serverState, setServerState] = useState<{
    success?: boolean;
    error?: string;
  }>({});

  const onSubmit = async (data: NewsletterFormValues) => {
    console.log('data', data);

    setServerState({});

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();

      if (!res.ok) {
        setServerState({ error: result.error || 'Something went wrong' });
        return;
      }

      setServerState({ success: true });
      reset();
    } catch {
      setServerState({ error: 'Network error. Please try again.' });
    }
  };

  return (
    <section className="bg-primary-2 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black">
          Stay Updated
        </h2>

        <p className="w-full max-w-2xl mx-auto mt-3 text-sm sm:text-base text-black">
          Stay connected with Paywise Mall by subscribing to our newsletter.{' '}
          <br /> We regularly share updates on promotions, new product arrivals,
          and exciting features.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="mt-6 flex flex-col items-center gap-4"
        >
          <div className="w-full max-w-md text-left space-y-2">
            <Label htmlFor="email" className="sr-only text-primary-5">
              Email address
            </Label>

            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              aria-invalid={!!errors.email || !!serverState.error}
              aria-describedby="email-error"
              className="input-style"
              {...register('email')}
            />

            {/* Zod Validation Error */}
            {errors.email && (
              <p id="email-error" className="text-xs error-text shake-error">
                {errors.email.message}
              </p>
            )}

            {/* Server Error */}
            {serverState.error && !errors.email && (
              <p className="text-xs error-text">{serverState.error}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary desc-text max-w-md"
          >
            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
          </Button>

          {serverState.success && (
            <p
              className="text-sm text-success"
              role="status"
              aria-live="polite"
            >
              Successfully subscribed!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
