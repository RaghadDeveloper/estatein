import CommonHero from "../components/sections/CommonHero";
import { propertiesPageHeroData } from "../data/propertiesData";
import PropertyFilters from "../components/ui/PropertyFilters";

const Properties = () => {
  return (
    <div>
      {/* Hero */}
      <CommonHero {...propertiesPageHeroData} />
      <PropertyFilters />
    </div>
  );
};

export default Properties;
