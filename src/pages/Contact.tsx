import CallToActionSection from "../components/sections/CallToActionSection";
import CommonHero from "../components/sections/CommonHero";
import Locations from "../components/sections/Locations";
import {
  LocationsHeaderData,
  contactPageHeroData,
  infoCardsData,
  locationsCardsData,
} from "../data/contactData";

import ConnectForm from "../components/sections/ConnectForm";
import Gallery from "../components/sections/Gallery";
import InfoCardsSection from "../components/sections/InfoCardsSection";

const Contact = () => {
  return (
    <div>
      <CommonHero {...contactPageHeroData} />
      <InfoCardsSection cards={infoCardsData} />
      <ConnectForm />
      <Locations headerData={LocationsHeaderData} cards={locationsCardsData} />
      <Gallery/>
      <CallToActionSection />
    </div>
  );
};

export default Contact;
