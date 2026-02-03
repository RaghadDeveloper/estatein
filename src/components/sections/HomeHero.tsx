import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import StatisticsCardsGorup from "../ui/StatisticsCardsGorup";
import InfoCardsSection from "./InfoCardsSection";
import { infoCardsData } from "../../data/homeData";
import { motion } from "framer-motion";
import HomeLogo from "../icons/HomeLogo";

const HomeHero = () => {
  const navigate = useNavigate();

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" as const },
    },
  };

  const floatLogo = {
    animate: {
      rotate: -360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  };

  return (
    <div className="mx-4 md:mx-20 lg:m-0">
      <div className="my-10 lg:m-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 2xl:gap-20">
        {/* right section image */}
        <div className="relative bg-shadow bg-linear-to-bl from-primary-50 to-shadow via-transparent border border-gray-15 lg:border-0 rounded-xl lg:rounded-none lg:order-2">
          <img
            src="/assets/images/abstractDesign/homeHero.png"
            alt="abstract design"
            className="absolute z-0"
          />
          <img
            src="/assets/images/hero/homeHero.webp"
            alt="property image"
            className="relative w-full h-full object-cover rounded-xl lg:rounded-none"
          />

          <motion.div
            className="absolute -bottom-10 lg:top-23.75 lg:-left-17 2xl:top-36 2xl:-left-23 h-fit w-fit"
            variants={floatLogo}
            animate="animate"
          >
            <HomeLogo />
          </motion.div>
        </div>

        {/* left section content */}
        <div className="mt-5 lg:my-10 lg:ml-20 min-[1740px]:ml-40.5! flex flex-col justify-center gap-10 lg:gap-12.5 min-[1740px]:gap-15">
          <motion.div
            className="flex flex-col gap-4 lg:gap-5 2xl:gap-6"
            variants={fadeSlideUp}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-[28px] lg:text-[46px] 2xl:text-[60px] font-semibold leading-[120%]"
              variants={fadeSlideUp}
            >
              Discover Your Dream Property with Estatein
            </motion.h2>

            <motion.p
              className="text-text-secondary text-[14px] lg:text-[16px] 2xl:text-[18px]"
              variants={fadeSlideUp}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: "easeInOut" as const,
              }}
            >
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </motion.p>
          </motion.div>

          <div className="w-full flex flex-col gap-4 2xl:gap-5 sm:flex-row md:w-fit">
            <Button variant="border">Learn More</Button>
            <Button variant="primary" onClick={() => navigate("/properties")}>
              Browse Properties
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeInOut" as const,
            }}
          >
            <StatisticsCardsGorup />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" as const }}
      >
        <InfoCardsSection cards={infoCardsData} rounded />
      </motion.div>
    </div>
  );
};

export default HomeHero;
