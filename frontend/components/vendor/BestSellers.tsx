import { vendors } from '@/data/vendors';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { VendorCard } from './VendorCard';
import Link from 'next/link';

export const BestSellers = () => {
  return (
    <section
      aria-labelledby="best-sellers-heading"
      className="py-10 w-full mx-auto"
    >
      <div className="container mx-auto space-y-8 h-full sm:space-y-10 px-4">
        <h2
          id="best-sellers-heading"
          className="sub-title-text text-center w-full mx-auto"
        >
          Best Sellers
        </h2>

        {/* MOBILE → MD: CAROUSEL */}
        <div className="block lg:hidden">
          <Carousel
            opts={{
              align: 'start',
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {vendors.map((vendor) => (
                <CarouselItem
                  key={vendor.id}
                  className="
                    pl-4
                    basis-[85%]
                    sm:basis-[60%]
                    md:basis-[45%]
                  "
                >
                  <VendorCard vendor={vendor} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* LG → XL: GRID */}
        <div
          className="
hidden lg:flex
    flex-wrap
    justify-center
    gap-6
          "
        >
          {vendors.map((vendor) => (
            <div
              key={vendor.id}
              className="w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)]"
            >
              <VendorCard key={vendor.id} vendor={vendor} />
            </div>
          ))}
        </div>
        <div className="w-full flex-center">
          <Link href={'/products'} className="btn-tertiary mx-auto ">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};
