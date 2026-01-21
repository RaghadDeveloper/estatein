import CallToActionSection from "../components/sections/CallToActionSection";
import CommonHero from "../components/sections/CommonHero";
import { contactPageHeroData } from "../data/contactData";

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <CommonHero {...contactPageHeroData} />
      <CallToActionSection />
    </div>
  );
};

export default Contact;
