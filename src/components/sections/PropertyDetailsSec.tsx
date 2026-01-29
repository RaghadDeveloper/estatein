import { motion } from "framer-motion";
import InfoBlock from "../ui/InfoBlock";
import FeatureItem from "../ui/FeatureItem";

const PropertyDetailsSec = () => {
  return (
    <section className=" w-full flex flex-col gap-5 px-4 pt-5 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40.5 2xl:pt-7.5 lg:flex-row ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" w-full lg:w-1/2 xl:max-w-195.75 h-auto min-h-75 lg:h-93.5 rounded-xl border border-gray-15 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12.5 flex flex-col overflow-auto transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_32px_rgba(99,102,241,0.2)] lg:overflow-hidden"
      >
        <InfoBlock />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className=" w-full lg:w-1/2 xl:max-w-195.75 lg:min-h-175 rounded-xl border border-gray-15 p-6 sm:p-7 md:p-8 flex flex-col  gap-7 sm:gap-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_32px_rgba(99,102,241,0.25)] overflow-hidden"
      >
        <h3 className=" text-white font-semibold text-[22px] sm:text-[24px] lg:text-[26px] w-full h-auto mb-2">
          Key Features and Amenities
        </h3>

        <div className="flex flex-col gap-7 sm:gap-8">
          <FeatureItem text="Expansive oceanfront terrace for outdoor entertaining" />
          <FeatureItem text="Gourmet kitchen with top-of-the-line appliances" />
          <FeatureItem text="Private beach access for morning strolls and sunset views" />
          <FeatureItem text="Master suite with a spa-inspired bathroom and ocean-facing balcony" />
          <FeatureItem text="Private garage and ample storage space" />
        </div>
      </motion.div>
    </section>
  );
};
export default PropertyDetailsSec;
