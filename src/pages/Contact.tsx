import CommonHero from "../components/sections/CommonHero";
import { contactPageHeroData } from "../data/contactData";

const Contact = () => {
  return <div>
    {/* Hero */}
    <CommonHero {...contactPageHeroData} />
  </div>;
};

export default Contact;
