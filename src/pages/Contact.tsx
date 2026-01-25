import CallToActionSection from "../components/sections/CallToActionSection";
import CommonHero from "../components/sections/CommonHero";
import Locations from "../components/sections/Locations";
import {
  LocationsHeaderData,
  contactPageHeroData,
  locationsCardsData,
} from "../data/contactData";

import ConnectForm from "../components/sections/ConnectForm";

const Contact = () => {
  return (
    <div>
      <CommonHero {...contactPageHeroData} />
      <ConnectForm />
      <Locations headerData={LocationsHeaderData} cards={locationsCardsData} />
      <CallToActionSection />
    </div>
  );
};

export default Contact;
