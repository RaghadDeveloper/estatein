import { motion } from "framer-motion";
import type { FeatureItemProps } from "../../interfaces";

const FeatureItem = ({
  text,
  icon = "/assets/icons/CategoryWhite.svg",
}: FeatureItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center py-2.5 px-3 lg:py-3.5 lg:px-4 2xl:py-4.5 2xl:px-6 gap-2.5 relative group border-l-2 border-primary-60 bg-[linear-gradient(90deg,var(--color-gray-10)_0%,rgba(26,26,26,0)_100%)] rounded-r-lg overflow-hidden hover:border-white/30 transition-all duration-500">
      <div className=" bg-[radial-gradient(circle_at_left,#8b5cf633,transparent_70%)] opacity-0  group-hover:opacity-100 transition-opacity duration-700" />
      <div className="z-10">
        <img
          src={icon}
          alt="feature icon"
          className="w-[13.50002384185791px] lg:w-3.75 2xl:w-4.5 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
        />
      </div>

      <p className=" z-10 flex-1 font-medium text-gray-60 transition-all duration-500 group-hover:text-white group-hover:tracking-wide tracking-[0.01em] wrap-break-word overflow-wrap-anywhere my-auto text-[14px] lg:text-[16px] 2xl:text-[18px] cursor-default">
        {text}
      </p>
    </motion.div>
  );
};
export default FeatureItem;