import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-center min-h-screen flex-col gap-4">
      <h2 className="text-xl font-semibold">Page not found</h2>

      <Link href="/">Go back home</Link>
    </div>
  );
}
