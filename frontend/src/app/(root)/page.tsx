import { HomeHero } from '@/components/sections/HomeHero';
import { HomeVideoSection } from '@/components/sections/HomeVideoSection';

const Home = () => {
  return (
    <main className="w-full">
      <HomeHero />
      <HomeVideoSection />
    </main>
  );
};

export default Home;
