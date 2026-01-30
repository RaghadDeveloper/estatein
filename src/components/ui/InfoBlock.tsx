import { motion } from "framer-motion";
import type { PropertyDetailsSectionProps } from "../../interfaces";
import { infoBlockData } from "../../data/PropertyData";
import InfoBlockCard from "./InfoBlockCard";
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const InfoBlock = ({
  description,
  bedrooms,
  bathrooms,
  area,
}: PropertyDetailsSectionProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full rounded-2xl backdrop-blur-sm">
      {/* description */}
      <motion.div
        variants={item}
        className="mb-5 pb-6 border-b border-white/20">
        <h3 className="text-white text-xl font-bold mb-4">Description</h3>
        <p className=" text-gray-60 font-urbanist font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[150%] tracking-[0%] mb-4 ">
          {description}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-2 gap-6 pt-2 lg:grid-cols-3 lg:gap-6">
        {/* bedrooms */}
        <motion.div variants={item} className="flex flex-col gap-3 group">
          <InfoBlockCard {...infoBlockData[0]} value={bedrooms} />
        </motion.div>

        {/* bathrooms */}
        <motion.div
          variants={item}
          className="flex flex-col gap-3 border-l border-white/20 pl-2.5 lg:border-x lg:px-3 group">
          <InfoBlockCard {...infoBlockData[1]} value={bathrooms} />
        </motion.div>

        {/* Mobile screens divided row */}
        <motion.div
          variants={item}
          className="col-span-2 h-px bg-white/20 lg:hidden"
        />

        {/* area */}
        <motion.div
          variants={item}
          className="flex flex-col gap-3 col-span-2 lg:col-span-1 group">
          <InfoBlockCard {...infoBlockData[2]} value={area} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InfoBlock;
