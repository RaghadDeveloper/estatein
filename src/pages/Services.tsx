import CommonHero from "../components/sections/CommonHero";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import { infoCardsData } from "../data/homeData";
import { servicesPageHeroData } from "../data/servicesData";

const Services = () => {
  return (
    <div>
      <CommonHero {...servicesPageHeroData} />
      <InfoCardsSection cards={infoCardsData} />
    </div>
  );
};

export default Services;
