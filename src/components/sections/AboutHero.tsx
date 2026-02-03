import { motion } from "framer-motion";
import { aboutHeroHeaderData } from "../../data/aboutData";
import SectionHeader from "../ui/SectionHeader";
import StatisticsCardsGorup from "../ui/StatisticsCardsGorup";

const AboutHero = () => {
  return (
    <section>
      <div className="mx-4 mt-12.5 md:mx-20 lg:mx-20 lg:mt-17.5 2xl:mx-40.5 2xl:mt-25 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 2xl:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            w-full h-full
            border border-gray-15 rounded-xl
            flex items-center justify-center
            relative overflow-hidden lg:order-2 group
            transition-all duration-500
            hover:border-primary-60
          "
        >
          {/* hero image */}
          <motion.img
            className="min-h-77.5 lg:min-h-108.5 2xl:min-h-136 w-full relative z-10 object-cover"
            src="assets/images/hero/aboutHero.webp"
            alt="About Hero"
            initial={{ scale: 1.05, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            whileHover={{ scale: 1.08, y: -5 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.img
            className="absolute mix-blend-color-dodge w-full h-full"
            src="assets/images/abstractDesign/aboutHero.png"
            alt="Abstract Design"
            initial={{ scale: 1, rotate: 0, opacity: 0.7 }}
            animate={{ scale: 1, rotate: 0, opacity: 0.7 }}
            whileHover={{ scale: 1.12, rotate: 2, opacity: 0.85 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>

        {/* hero data */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            <SectionHeader {...aboutHeroHeaderData} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <StatisticsCardsGorup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
