import SectionContainer from "../components/layouts/SectionContainer";
import FeaturedProperties from "../components/sections/FeaturedProperties";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import { infoCardsData } from "../data/homeData";

const Home = () => {
  return (
    <div className="h-screen">
      Home
      <section className="mx-4 sm:mx-20 lg:mx-0">
        <InfoCardsSection cards={infoCardsData} />
      </section>
    </div>
  );
};

export default Home;
