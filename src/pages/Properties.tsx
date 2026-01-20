import CommonHero from "../components/sections/CommonHero";
import Portfolio from "../components/sections/Portfolio";
import PropertiesForm from "../components/sections/PropertiesForm";
import { propertiesPageHeroData } from "../data/propertiesData";

const Properties = () => {
  return (
    <div>
      <CommonHero {...propertiesPageHeroData} />
      <Portfolio />
      <PropertiesForm />
    </div>
  );
};

export default Properties;
