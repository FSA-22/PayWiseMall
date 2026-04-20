'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { SearchInput } from './shared/SearchAnything';
import Link from 'next/link';

type MenuProps = {
  onMenuClick?: () => void;
};

export const UserActions = ({ onMenuClick }: MenuProps) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="relative flex items-center gap-3">
      {/* Mobile search icon */}
      <button
        onClick={() => setShowSearch((prev) => !prev)}
        className="sm:hidden bg-gray-200 hover:cursor-pointer"
      >
        <Image src="/icons/searching.svg" height={16} width={16} alt="search" />
      </button>

      {/* Search Input (Mobile) */}
      {showSearch && (
        <div className="absolute top-12 -right-6 w-screen sm:hidden max-w-sm z-50 animate-in fade-in zoom-in-95">
          <div className=" w-full shadow-lg rounded-2xl  border">
            <SearchInput />
          </div>
        </div>
      )}

      {/* Other icons */}
      <Image
        src="/icons/badge-basket.svg"
        height={12}
        width={12}
        alt="cart"
        className="hover:cursor-pointer"
      />
      <Image
        src="/icons/badge-user.svg"
        height={16}
        width={16}
        alt="user"
        className="hover:cursor-pointer"
      />
      <Image
        src="/icons/help-circle.svg"
        height={16}
        width={16}
        alt="help"
        className="hover:cursor-pointer"
      />

      {/* Mobile menu trigger */}
      <button onClick={onMenuClick} className="sm:hidden cursor-pointer">
        <Image src="/icons/menu-05.svg" height={16} width={16} alt="menu" />
      </button>

      {/* Desktop CTA */}
      <Link href="/auths">
        <Button className="hidden sm:flex btn-primary rounded-2xl py-5 w-50">
          Create Account
        </Button>
      </Link>
    </div>
  );
};
