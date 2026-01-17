import HomeHero from "../components/sections/HomeHero";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import { infoCardsData } from "../data/homeData";
import CallToActionSection from "../components/sections/CallToActionSection";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <section className="mx-4 sm:mx-20 lg:mx-0">
        <InfoCardsSection cards={infoCardsData} />
      </section>
      <CallToActionSection />
    </div>
  );
};

export default Home;
