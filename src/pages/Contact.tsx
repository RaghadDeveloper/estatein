import CommonHero from "../components/sections/CommonHero";
import Locations from "../components/sections/Locations";
import { LocationsHeaderData, contactPageHeroData, locationsCardsData } from "../data/contactData";

const Contact = () => {
  return <div>
    {/* Hero */}
    <CommonHero {...contactPageHeroData} />
    <Locations
    headerData={LocationsHeaderData}
    cards={locationsCardsData}
    />
  </div>;
};

export default Contact;
