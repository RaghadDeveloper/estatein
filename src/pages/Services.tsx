import SectionContainer from "../components/layouts/SectionContainer";
import CommonHero from "../components/sections/CommonHero";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import UnlockValue from "../components/sections/UnlockValue";
import { infoCardsData } from "../data/homeData";
import { servicesPageHeroData } from "../data/servicesData";

const Services = () => {
  return (
    <div>
      <CommonHero {...servicesPageHeroData} />
      <InfoCardsSection cards={infoCardsData} />
      {/* <CallToActionSection /> */}
      <SectionContainer>
        <UnlockValue />
      </SectionContainer>
    </div>
  );
};

export default Services;
