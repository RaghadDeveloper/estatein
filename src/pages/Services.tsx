import SectionContainer from "../components/layouts/SectionContainer";
import CommonHero from "../components/sections/CommonHero";
import EffortlessManagement from "../components/sections/EffortlessManagement";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import SmartInvestments from "../components/sections/SmartInvestments";
import UnlockValue from "../components/sections/UnlockValue";
import SectionHeader from "../components/ui/SectionHeader";
import { infoCardsData } from "../data/homeData";
import { EffortlessFormHeaderData, servicesFormHeaderData, servicesPageHeroData } from "../data/servicesData";

const Services = () => {
  return (
    <div>
      <CommonHero {...servicesPageHeroData} />
      <InfoCardsSection cards={infoCardsData} />
      {/* <CallToActionSection /> */}
      <SectionContainer>
        <SectionHeader {...servicesFormHeaderData} />
        <UnlockValue />
        <SectionHeader {...EffortlessFormHeaderData} />
        <EffortlessManagement />
        <SmartInvestments/>
      </SectionContainer>
    </div>
  );
};

export default Services;
