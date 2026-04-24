import { HomeHero } from '@/components/sections/HomeHero';
import { HomeVideoSection } from '@/components/sections/HomeVideoSection';
import HomeAboutUs from '@/components/sections/HomeAboutUs';

const Home = () => {
  return (
    <main className="w-full flex flex-col mx-auto">
      <HomeHero />
      <div className="w-full max-w-7xl min-h-screen py-8 space-y-8 sm:space-y-10 lg:space-y-12 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <HomeVideoSection />
        <HomeAboutUs />
      </div>
    </main>
  );
};

export default Home;
