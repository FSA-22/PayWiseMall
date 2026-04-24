import { BodyTextBlock } from '../shared/TextComponent';
import { HeroImage } from '../ui/hero/HeroImage';

const HomeAboutUs = () => {
  return (
    <section
      className="w-full flex flex-col bg-white items-center  space-y-2 sm:space-y-4 lg:space-y-0 xl:space-y-6 mx-auto"
      aria-labelledby="home-about-us"
    >
      <h2 className="sub-title-text" aria-labelledby="home-about-us-heading">
        About Us
      </h2>
      <div className="w-full flex flex-col-reverse items-center mx-auto gap-8 lg:flex-row xl:flex-row xl:justify-between">
        <BodyTextBlock
          align="center"
          body="At Paywise Mall, we believe that shopping should be a seamless and rewarding experience for everyone."
          body2="Our mission is to empower individuals to make their desired purchases without financial strain."
          body3="We understand the significance of smart financial planning, and that's why we've crafted a unique ecosystem that combines the joy of shopping with the wisdom of financial prudence."
          action={{
            label: 'Read more',
            href: '/about',
            variant: 'tertiary',
            icon: '/icons/arrow-right.svg',
          }}
        />
        <div>
          <HeroImage src="/images/home-about-us.svg" alt="About Us Image" />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
