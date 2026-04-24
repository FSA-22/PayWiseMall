// components/layout/header/MobileDrawer.tsx
'use client';

import { X } from 'lucide-react';
import { NavLinksGroup } from './nav/NavLinksGroup';
import { InlineCTA } from '../InlineCTA';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export const MobileDrawer = ({ open, onClose }: MobileDrawerProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-50 transition  ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white z-50 transform transition-transform duration-300
        ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b cursor-pointer">
          <Link href="/">
            <Image
              src={'/icons/logo.svg'}
              alt="App Logo"
              height={80}
              width={80}
              className="w-auto h-auto max-sm:w-16 max-sm:h-16"
              loading="eager"
            />
          </Link>

          <button className="" onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-6 p-4">
          {/* Nav Links */}
          <NavLinksGroup vertical />

          {/* Divider */}
          <div className="h-px bg-gray-200" />

          {/* CTAs */}
          <InlineCTA
            text="Become a Vendor"
            imageUrl="/icons/arrow-up-right.svg"
          />
          <InlineCTA
            text="Download Our App"
            imageUrl="/icons/arrow-up-right.svg"
          />
          {/* Auth */}
          <Link href="/auths">
            <Button className="btn-primary rounded-xl py-3 cursor-pointer">
              Create Account
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
