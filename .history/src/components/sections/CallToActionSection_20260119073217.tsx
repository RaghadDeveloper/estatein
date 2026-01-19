import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const CallToActionSection = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative z-0 flex flex-col lg:flex-row justify-between lg:items-center
      gap-7.5 bg-[url('/assets/images/abstractDesign/ctaLeft.png')]
      bg-no-repeat bg-left- lg:bg-bottom-left
      py-12.5 lg:py-15 2xl:py-25 px-4 lg:px-20 2xl:px-40.5 border-y border-gray-15 mt-20 lg:mt-30 2xl:mt-37.5"
    >
      <img
        className="absolute right-0 bottom-0 -z-1"
        src="/assets/images/abstractDesign/ctaRight.png"
        alt="bg photo"
      />
      <div className="lg:w-244.75 2xl:w-288.5">
        <h2
          className="font-semibold leading-normal
        text-[28px] lg:text-[38px] 2xl:text-[48px] text-white mb-1.5 lg:mb-2.5
        2xl:mb-3.5"
        >
          Start Your Real Estate Journey Today
        </h2>
        <p
          className="font-medium leading-normal
        text-[14px] lg:text-[16px] 2xl:text-[18px] text-gray-60"
        >
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, or expert real estate advice,
          Estatein is here to assist you every step of the way. Take the first
          step towards your real estate goals and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <div>
        <Button variant="primary" onClick={() => navigate("/properties")}>
          Explore Properties
        </Button>
      </div>
    </section>
  );
};

export default CallToActionSection;
