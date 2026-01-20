import CommonHero from "../components/sections/CommonHero";
import { servicesPageHeroData } from "../data/servicesData";

const Services = () => {
  return <div>
    {/* hero */}
    <CommonHero {...servicesPageHeroData} />
  </div>;
};

export default Services;
