'use client';

import { TopNavbar } from './TopNavbar';
import { BottomNavbar } from './BottomNavbar';

export const Header = () => {
  return (
    <header className="header-style">
      {/* Main navigation */}
      <TopNavbar />

      {/* Bottom strip */}
      <BottomNavbar />
    </header>
  );
};
