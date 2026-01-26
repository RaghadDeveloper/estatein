import { aboutHeroHeaderData } from "../../data/aboutData";
import SectionHeader from "../ui/SectionHeader";
import StatisticsCardsGorup from "../ui/StatisticsCardsGorup";

const AboutHero = () => {
  return (
    <section>
      <div className="mx-4 mt-12.5 md:mx-20 lg:mx-20 lg:mt-17.5 2xl:mx-40.5 2xl:mt-25 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 2xl:gap-20 items-center">
        {/* hero image */}
        <div className="w-full h-fullw qlg:min-w-152.5 q2xl:min-w-188.75  border border-gray-15 rounded-xl flex items-center justify-center relative overflow-hidden lg:order-2">
          <img
            className="min-h-77.5 lg:min-h-108.5 2xl:min-h-136 w-full relative z-10 object-cover"
            src="assets/images/hero/aboutHero.webp"
            alt=""
          />
          <img
            className="absolute mix-blend-color-dodge w-full h-full"
            src="assets/images/abstractDesign/aboutHero.png"
            alt=""
          />
        </div>

        {/* hero data */}
        <div>
          <SectionHeader {...aboutHeroHeaderData} />
          <StatisticsCardsGorup />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
