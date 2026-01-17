import CommonHero from "../components/sections/CommonHero";
import { propertiesPageHeroData } from "../data/propertiesData";

const Properties = () => {
  return <div>
    {/* Hero */}
    <CommonHero {...propertiesPageHeroData} />
  </div>;
};

export default Properties;
