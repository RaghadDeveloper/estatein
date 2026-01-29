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
      className=" relative group flex items-start gap-4 w-full min-h-20 py-6 px-5 sm:py-5 sm:px-4 md:py-4 md:px-2 border-l-2 border-primary-60 bg-[linear-gradient(90deg,#1A1A1A_0%,rgba(26,26,26,0)_100%)] rounded-r-lg overflow-hidden hover:border-white/30 transition-all duration-500"
    >
      <div className=" bg-[radial-gradient(circle_at_left,rgba(139,92,246,0.2),transparent_70%)] opacity-0  group-hover:opacity-100 transition-opacity duration-700" />
      <div className="z-10 shrink-0 mt-1">
        <img
          src={icon}
          alt="feature icon"
          className="transition-all duration-500 group-hover:opacity-100 group-hover:scale-110 mt-2"
        />
      </div>

      <p className=" z-10 flex-1 font-urbanist font-medium text-gray-60 transition-all duration-500 group-hover:text-white  group-hover:tracking-wide text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-[160%] tracking-[0.01em] wrap-break-word overflow-wrap-anywhere my-auto">
        {text}
      </p>
    </motion.div>
  );
};
export default FeatureItem;
