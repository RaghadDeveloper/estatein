import HomeHero from "../components/sections/HomeHero";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import { infoCardsData } from "../data/homeData";
import Testimonials from "../components/sections/Testimonials";
import Faq from "../components/sections/Faq";
import CallToActionSection from "../components/sections/CallToActionSection";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <InfoCardsSection cards={infoCardsData} />
      <Testimonials />
      <Faq />
      <CallToActionSection />
    </div>
  );
};

export default Home;
