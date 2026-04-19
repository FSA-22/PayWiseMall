'use client';

import { SearchInput } from '../shared/SearchAnything';
import { InlineCTA, InlineCTA2, LocationSelector } from '../InlineCTA';

export const BottomNavbar = () => {
  return (
    <div className="hidden sm:block w-full  bg-primary-2">
      <div className="flex mx-auto items-center justify-between gap-2 py-3 max-w-6xl  text-white">
        {/* Sellers */}
        <div className=" flex-center gap-5">
          <InlineCTA2 text="Category" imageUrl="/icons/menu-02.svg" />
          <InlineCTA2 text="Sellers" imageUrl="/icons/user-multiple-03.svg" />
        </div>

        {/* Search */}
        <div className="flex-1 max-w-sm ml-2 ">
          <SearchInput />
        </div>

        {/* CTA Links */}
        <div className="flex-center gap-4">
          <InlineCTA
            text="Become a Vendor"
            imageUrl="/icons/arrow-up-right.svg"
          />
          <InlineCTA
            text="Download Our App"
            imageUrl="/icons/arrow-up-right.svg"
          />

          {/* Location */}
          <LocationSelector
            text="Ikeja, Lagos 1105001"
            imageUrl="/icons/location-user-04.svg"
            imageUrl2="/icons/arrow-down-01.svg"
          />
        </div>
      </div>
    </div>
  );
};
