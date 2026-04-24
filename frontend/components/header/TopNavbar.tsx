'use client';

import Image from 'next/image';
import { UserActions } from '../UserActions';
import { NavLinksGroup } from './nav/NavLinksGroup';
import { useState } from 'react';
import { MobileDrawer } from './MobileDrawer';
import Link from 'next/link';

export const TopNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex mx-auto items-center justify-between max-sm:px-6 max-w-6xl py-3 bg-white">
      <div className="flex-center gap-6">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src={'/icons/logo.svg'}
            alt="App Logo"
            height={80}
            width={80}
            className="h-auto w-auto max-sm:w-16 max-sm:h-16"
            loading="eager"
          />
        </Link>
        {/* Nav Links */}
        <ul className="hidden sm:block">
          <NavLinksGroup />
        </ul>
      </div>
      {/* Right Actions */}
      <UserActions onMenuClick={() => setOpen(true)} />
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};
