import CommonHero from "../components/sections/CommonHero";
import Portfolio from "../components/sections/Portfolio";
import { propertiesPageHeroData } from "../data/propertiesData";

const Properties = () => {
  return (
    <div>
      <CommonHero {...propertiesPageHeroData} />
      <Portfolio />
    </div>
  );
};

export default Properties;
