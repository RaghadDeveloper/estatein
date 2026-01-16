import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import StatisticsCardsGorup from "../ui/statisticsCardsGorup";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-4 my-10 md:mx-20 lg:m-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-15 2xl:gap-20">
      {/* right section image */}
      <div className="relative bg-gray-09 bg-linear-to-bl from-primary-50 to-gray-09 via-transparent border border-gray-15 lg:border-0 rounded-xl lg:rounded-none lg:order-2">
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
        <img
          src="/assets/images/hero/homeLogo.webp"
          alt="logo"
          className="absolute w-29 -bottom-10 lg:w-32.25 lg:top-23.75 lg:-left-17 2xl:w-43.75 2xl:top-36 2xl:-left-23"
        />
      </div>

      {/* left section content */}
      <div className="mt-5 lg:my-10 lg:ml-20 2xl:ml-40.5 flex flex-col justify-center items-center gap-10 lg:gap-12.5 2xl:gap-15">
        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
          <h2 className="text-[28px] lg:text-[46px] 2xl:text-[60px] font-semibold leading-[120%]">
            Discover Your Dream Property with Estatein
          </h2>
          <p className="text-gray-60 text-[14px] lg:text-[16px] 2xl:text-[18px]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 2xl:gap-5 sm:flex-row">
          <Button variant="border">Learn More</Button>
          <Button variant="primary" onClick={() => navigate("/properties")}>
            Browse Properties
          </Button>
        </div>

        <StatisticsCardsGorup />
      </div>
    </div>
  );
};

export default HomeHero;
