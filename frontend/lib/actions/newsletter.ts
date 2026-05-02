'use server';

import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Enter a valid email address'),
});

export type NewsletterState = {
  success?: boolean;
  error?: string;
};

export async function subscribeToNewsletter(
  prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const parsed = schema.safeParse({
    email: formData.get('email'),
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message || 'Invalid input',
    };
  }

  const { email } = parsed.data;

  try {
    console.log('Subscribing email:', email);

    await new Promise((res) => setTimeout(res, 800));

    return { success: true };
  } catch (error) {
    return {
      error: 'Something went wrong. Try again.',
    };
  }
}
