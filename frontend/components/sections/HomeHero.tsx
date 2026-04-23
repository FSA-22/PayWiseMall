import Image from 'next/image';
import { Button } from '../ui/button';
import { HeroImage } from '../ui/hero/HeroImage';
import { HeroText } from '../ui/hero/HeroText';

export const HomeHero = () => {
  return (
    <section className="hero-rapper">
      {/* FIRST HERO */}
      <div className="hero-1">
        {/* TEXT */}
        <div className="home-hero-content-rapper">
          <HeroText
            align="center"
            title={[
              { text: 'Shop Smarter,', className: 'text-white' },
              { text: 'Live Better', className: 'text-secondary-2' },
            ]}
            body={[
              {
                text: 'Browse through an extensive range of products meticulously selected to cater for your every need.',
                className: 'text-white max-md:px-6',
              },
              {
                text: "From version-forward apparel to cutting-edge electronics, we've got it all.",
                className: 'text-white max-md:px-6',
              },
            ]}
          />

          <Button className="btn-secondary flex items-center gap-2 w-fit mx-auto lg:mx-0 py-5 px-5 rounded-xl">
            Begin Shopping Experience
            <Image
              height={14}
              width={14}
              alt="Hero Button"
              src={'/icons/badge-basket-white.svg'}
            />
          </Button>
        </div>

        {/* IMAGE */}
        <div className="home-hero-1-image-rapper">
          <HeroImage src="/images/shopping-man.svg" alt="Shopping-man" />
        </div>
      </div>

      {/* SECOND HERO */}
      <div className="hero-2">
        {/* IMAGE */}
        <div className="home-hero-2-image-rapper">
          <HeroImage src="/images/excited-woman.svg" alt="Excited woman" />
        </div>

        {/* TEXT */}
        <div className="home-hero-content-rapper xl:mr-25">
          <HeroText
            align="center"
            title={[
              { text: 'Building your Dream', className: 'text-secondary-2' },
              { text: 'Cart', className: 'text-secondary-2' },
            ]}
            body={[
              {
                text: "Are you eyeing that sleek gadget, a fashionable wardrobe upgrade, or a home decor makeover? We've got your back.",
                className: 'text-black',
              },
              {
                text: 'With our innovative savings plan, you can turn those wishlist items into tangible treasures without breaking the bank.',
                className: 'text-black',
              },
            ]}
          />

          <Button className="btn-secondary flex items-center gap-2 w-fit mx-auto lg:mx-0 py-5 px-5 rounded-xl">
            Start Saving Now
            <Image
              height={14}
              width={14}
              alt="Hero Button"
              src={'/icons/wallet.svg'}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
