import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'sonner';
import { Header } from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PayWiseMall',
    template: '%s | PayWiseMall',
  },
  description:
    'PayWise Mall is a full-stack E-commerce and semi-fin-tech platform that enables businesses to advertise, sell, manage inventory, track sales, customers, and analytics through a modern dashboard.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        jetbrainsMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}

        <Toaster
          position="top-right"
          richColors
          expand
          visibleToasts={3}
          toastOptions={{
            className: 'toast animate-in fade-in slide-in-from-top-2',
          }}
        />
      </body>
    </html>
  );
}
