import CallToActionSection from "../components/sections/CallToActionSection";
import CommonHero from "../components/sections/CommonHero";
import ConnectForm from "../components/sections/ConnectForm";
import { contactPageHeroData } from "../data/contactData";

const Contact = () => {
  return (
    <div>
      {/* Hero */}
      <CommonHero {...contactPageHeroData} />
      <CallToActionSection />
    </div>
  );
  return <div>
    {/* Hero */}
    <CommonHero {...contactPageHeroData} />
    <ConnectForm />
  </div>;
};

export default Contact;
