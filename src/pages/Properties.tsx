import CommonHero from "../components/sections/CommonHero";
import PropertiesForm from "../components/sections/PropertiesForm";
import { propertiesPageHeroData } from "../data/propertiesData";

const Properties = () => {
  return <div>
    {/* Hero */}
    <CommonHero {...propertiesPageHeroData} />
    <PropertiesForm />
  </div>;
};

export default Properties;
