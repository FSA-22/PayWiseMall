import { HomeHero } from '@/components/sections/HomeHero';
import { HomeVideoSection } from '@/components/sections/HomeVideoSection';
import HomeAboutUs from '@/components/sections/HomeAboutUs';
import { BestSellers } from '@/components/vendor/BestSellers';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import DownloadApp from '@/components/sections/DownloadApp';
import Faq from '@/components/sections/FAQ';
import NewsletterSection from '@/components/sections/Newsletter';

const Home = () => {
  return (
    <main className="w-full flex flex-col mx-auto">
      <HomeHero />
      <div className="w-full max-w-7xl min-h-screen space-y-8 sm:space-y-10 lg:space-y-12 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <HomeVideoSection />
        <HomeAboutUs />
        <BestSellers />
        <TestimonialSection />
        <DownloadApp />
        <div>
          <Faq />
          <NewsletterSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
