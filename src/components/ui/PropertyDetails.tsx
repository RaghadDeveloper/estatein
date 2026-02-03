import { motion } from "framer-motion";
import InfoBlockCard from "./InfoBlockCard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProperty } from "../../redux/properties/propertiesSelectors";
import Bedrooms from "../icons/Bedroom";
import type { InfoBlockCardProps } from "../../interfaces";
import Bathroom from "../icons/Bathroom";
import Area from "../icons/Area";
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

const PropertyDetails = () => {
  const { id } = useParams();
  const property = useSelector(selectProperty(id!));

  const infos: InfoBlockCardProps[] = [
    {
      label: "Bedrooms",
      Icon: Bedrooms,
      value: property?.bedrooms,
    },
    {
      label: "Bathrooms",
      Icon: Bathroom,
      value: property?.bathrooms,
    },
    {
      label: "Area",
      Icon: Area,
      value: property?.area,
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full rounded-2xl backdrop-blur-sm"
    >
      {/* description */}
      <motion.div variants={item} className="mb-5 pb-6 border-b border-gray-15">
        <h3 className=" text-xl font-bold mb-4">Description</h3>
        <p className=" text-text-secondary font-urbanist font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[150%] tracking-[0%] ">
          {property?.description}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="grid grid-cols-2 gap-6 pt-2 lg:grid-cols-3 lg:gap-6"
      >
        {/* bedrooms */}
        <motion.div variants={item} className="flex flex-col gap-3 group">
          <InfoBlockCard {...infos[0]} />
        </motion.div>

        {/* bathrooms */}
        <motion.div
          variants={item}
          className="flex flex-col gap-3 border-l border-gray-15 pl-2.5 lg:border-x lg:px-3 group"
        >
          <InfoBlockCard {...infos[1]} />
        </motion.div>

        {/* Mobile screens divided row */}
        <motion.div
          variants={item}
          className="col-span-2 h-px bg-white/20 lg:hidden"
        />

        {/* area */}
        <motion.div
          variants={item}
          className="flex flex-col gap-3 col-span-2 lg:col-span-1 group"
        >
          <InfoBlockCard {...infos[2]} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PropertyDetails;
