import HomeHero from "../components/sections/HomeHero";
import Testimonials from "../components/sections/Testimonials";
import Faq from "../components/sections/Faq";
import CallToActionSection from "../components/sections/CallToActionSection";
import FeaturedProperties from "../components/sections/FeaturedProperties";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
      <CallToActionSection />
    </div>
  );
};

export default Home;
