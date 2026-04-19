'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TopNavbarProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, children }: TopNavbarProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative text-sm font-medium transition
        ${isActive ? 'text-black' : 'hover:text-primary-5'}
      `}
    >
      {children}

      {isActive && (
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-secondary-1 rounded" />
      )}
    </Link>
  );
};
