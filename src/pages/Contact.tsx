import CallToActionSection from "../components/sections/CallToActionSection";
import CommonHero from "../components/sections/CommonHero";
import ConnectForm from "../components/sections/ConnectForm";
import { contactPageHeroData } from "../data/contactData";

const Contact = () => {
  return (
    <div>
      <CommonHero {...contactPageHeroData} />
      <ConnectForm />
      <CallToActionSection />
    </div>
  );

};

export default Contact;
