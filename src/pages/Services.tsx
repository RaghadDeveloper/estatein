import SectionContainer from "../components/layouts/SectionContainer";
import CommonHero from "../components/sections/CommonHero";
import EffortlessManagement from "../components/sections/EffortlessManagement";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import SmartInvestments from "../components/sections/SmartInvestments";
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
        <EffortlessManagement />
        <SmartInvestments />
      </SectionContainer>
    </div>
  );
};

export default Services;
