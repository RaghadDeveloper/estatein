import CallToActionSection from "../components/sections/CallToActionSection";
import CommonHero from "../components/sections/CommonHero";
import Locations from "../components/sections/Locations";
import {
  LocationsHeaderData,
  contactPageHeroData,
  locationsCardsData,
} from "../data/contactData";

import ConnectForm from "../components/sections/ConnectForm";
import Gallery from "../components/sections/Gallery";

const Contact = () => {
  return (
    <div>
      <CommonHero {...contactPageHeroData} />
      <ConnectForm />
      <Locations headerData={LocationsHeaderData} cards={locationsCardsData} />
      <CallToActionSection />
      <Gallery/>
    </div>
  );
};

export default Contact;
