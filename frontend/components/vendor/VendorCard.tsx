'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, HeartIcon, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Vendor } from '@/constants';
import {
  getAvailabilityColor,
  getAvailabilityTextColor,
} from '@/lib/utils/vendor';
import { Card, CardContent } from '../ui/card';

type vendorCarProps = {
  vendor: Vendor;
};

export const VendorCard = ({ vendor }: vendorCarProps) => {
  const availabilityColor = getAvailabilityColor(vendor.availableProducts);
  const availabilityTextColor = getAvailabilityTextColor(
    vendor.availableProducts,
  );

  const [isFavorite, setIsFavorite] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (!stored) return;

    const favorites = JSON.parse(stored);
    setIsFavorite(favorites.includes(vendor.id));
  }, [vendor.id]);

  const handleFavoriteToggle = () => {
    const stored = localStorage.getItem('favorites');
    const favorites: string[] = stored ? JSON.parse(stored) : [];

    let updatedFavorites;

    if (favorites.includes(vendor.id)) {
      updatedFavorites = favorites.filter((id) => id !== vendor.id);
      setIsFavorite(false);
    } else {
      updatedFavorites = [...favorites, vendor.id];
      setIsFavorite(true);
    }

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <article aria-label={vendor.name} className="w-full py-1">
      <Card className="relative rounded-xl shadow-sm h-fit bg-gray-50">
        {/* Trending Badge */}
        {vendor.isTrending && (
          <span className="absolute top-3 left-3 bg-tertiary-1 text-white text-xs px-2 py-1 rounded-sm uppercase">
            Trending
          </span>
        )}

        {/* Favorite Button */}
        <button
          aria-label="Toggle favorite"
          onClick={handleFavoriteToggle}
          className="absolute top-3 right-3 hover:cursor-pointer"
        >
          <Heart
            className={`w-6 h-6 fill-current transition-colors duration-200 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
          />
        </button>

        <CardContent className="flex flex-col items-start gap-3 pt-6">
          {/* Logo */}
          <div className="w-full flex justify-center h-32">
            <Image
              src={vendor.logo}
              alt={`${vendor.name} logo`}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              MEMBER SINCE {vendor.memberSince}
            </p>

            <h3 className="font-semibold text-lg">{vendor.name}</h3>

            <div className="flex items-center gap-2 text-sm">
              <span>{vendor.reviewsCount} reviews</span>
              <div className="flex-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < Math.round(vendor.rating)
                        ? 'fill-secondary-1 text-secondary-1'
                        : 'text-gray-300',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Availability Bar */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={cn('h-full', availabilityColor)}
              style={{
                width: `${Math.min(vendor.availableProducts, 100)}%`,
              }}
            />
          </div>

          {/* Footer Stats */}
          <div className="flex justify-between w-full text-sm">
            <span>{vendor.itemsSold.toLocaleString()} Items Sold</span>
            <span className={availabilityTextColor}>
              {vendor.availableProducts} Available
            </span>
          </div>
        </CardContent>
      </Card>
    </article>
  );
};
