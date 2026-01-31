import { motion } from "framer-motion";
import InfoBlock from "../ui/InfoBlock";
import FeatureItem from "../ui/FeatureItem";
import { featureItems } from "../../data/PropertyData";

const PropertyDetailsSec = () => {
  return (
    <section className="flex flex-col items-start gap-5 2xl:gap-7.5 px-4 pt-5 lg:px-20 2xl:px-40.5 2xl:pt-7.5 lg:flex-row ">
      {/* Info Block Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lg:w-1/2 rounded-[10px] 2xl:rounded-xl border border-gray-15 flex flex-col p-5 gap-5 lg:p-10 lg:gap-10 2xl:p-12.5 2xl:gap-12.5 overflow-auto transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_32px_rgba(99,102,241,0.2)] lg:overflow-hidden cursor-default">
        <InfoBlock />
      </motion.div>

      {/* Key Features Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="lg:w-1/2 rounded-xl border border-gray-15 flex flex-col p-5 gap-5 lg:p-10 lg:gap-10 2xl:p-12.5 2xl:gap-12.5 transition-all duration-500 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_12px_32px_rgba(99,102,241,0.25)] overflow-hidden">
        <h3 className="font-semibold text-[18px] lg:text-[20px] 2xl:text-[24px]">
          Key Features and Amenities
        </h3>

        <div className="flex flex-col gap-4.5 lg:gap-5 2xl:gap-7.5">
          {featureItems.map((itemText, index) => (
            <FeatureItem key={index} text={itemText} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default PropertyDetailsSec;
