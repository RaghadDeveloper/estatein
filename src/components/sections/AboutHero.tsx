import { aboutHeroHeaderData } from "../../data/aboutData";
import SectionHeader from "../ui/SectionHeader";
import StatisticsCardsGorup from "../ui/StatisticsCardsGorup";

const AboutHero = () => {
  return (
    <section>
      <div className="mx-4 mt-12.5 lg:mx-20 lg:mt-17.5 2xl:mx-40.5 2xl:mt-25 flex flex-col gap-10 lg:flex-row-reverse lg:gap-15 2xl:gap-20 items-center">
        {/* hero image */}
        <div className="w-full h-full lg:min-w-152.5 2xl:min-w-188.75  border border-gray-15 rounded-xl flex items-center justify-center relative overflow-hidden">
          <img
            className="w-full relative z-10"
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
