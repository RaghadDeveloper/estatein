import { motion } from "framer-motion";
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

const InfoBlock = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full rounded-2xl backdrop-blur-sm"
    >
      <motion.div
        variants={item}
        className="mb-5 pb-6 border-b border-white/20"
      >
        <h3 className="text-white text-xl font-bold mb-4">Description</h3>
        <p className=" text-gray-60 font-urbanist font-medium text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] leading-[150%] tracking-[0%] mb-4 ">
          Discover your own piece of paradise with the Seaside Serenity Villa.
          With an open floor plan, breathtaking ocean views from every room, and
          direct access to a pristine sandy beach, this property is the epitome
          of coastal living.
        </p>
      </motion.div>
      <motion.div
        variants={container}
        className="grid grid-cols-2 gap-6 pt-2 lg:grid-cols-3 lg:gap-6"
      >
        <motion.div variants={item} className="flex flex-col gap-3 group">
          <div className="flex items-center gap-1 text-white/60 text-sm">
            <img
              src="/assets/icons/Bedroom.svg"
              className="w-6 h-6 opacity-60 transition-transform duration-300 group-hover:scale-110"
            />
            <span className=" font-urbanist font-medium tracking-[0%] text-[14px] leading-[150%] w-28.75 h-5.25 xl:text-[18px] xl:leading-[150%] xl:w-42.75 xl:h-6.75 ">
              Bedrooms
            </span>
          </div>
          <span className="text-white text-2xl font-bold">04</span>
        </motion.div>

        <motion.div
          variants={item}
          className="flex flex-col gap-3 border-l border-white/20 pl-2.5 lg:border-x lg:px-3 group"
        >
          <div className="flex items-center gap-1 text-white/60 text-sm">
            <img
              src="/assets/icons/Bathroom.svg"
              className="w-6 h-6 opacity-60 transition-transform duration-300 group-hover:scale-110"
            />
            <span className=" font-urbanist font-medium tracking-[0%] text-[14px] leading-[150%] w-28.75 h-5.25 xl:text-[18px] xl:leading-[150%] xl:w-42.75 xl:h-6.75 ">
              Bathrooms
            </span>
          </div>
          <span className="text-white text-2xl font-bold">03</span>
        </motion.div>

        <motion.div
          variants={item}
          className="col-span-2 h-px bg-white/20 lg:hidden"
        />

        <motion.div
          variants={item}
          className="flex flex-col gap-3 col-span-2 lg:col-span-1 group"
        >
          <div className="flex items-center gap-1 text-white/60 text-sm">
            <img
              src="/assets/icons/area.svg"
              className="w-6 h-6 opacity-60 transition-transform duration-300 group-hover:scale-110"
            />
            <span className=" font-urbanist font-medium tracking-[0%] text-[14px] leading-[150%] w-28.75 h-5.25 xl:text-[18px] xl:leading-[150%] xl:w-42.75 xl:h-6.75 ">
              Area
            </span>
          </div>
          <span className=" text-white font-urbanist font-semibold text-[18px] leading-[150%] w-full max-w-79.5 h-6.75 md:text-[19px] md:leading-[150%] md:max-w-62.5 md:h-auto xl:text-[20px] xl:leading-[150%] xl:w-42.75 xl:h-7.5 whitespace-nowrap">
            2,500 Square Feet
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default InfoBlock;
