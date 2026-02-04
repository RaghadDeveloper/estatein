import type { CardFaqProps } from "../../interfaces";
import Button from "./Button";
import HoverBg from "./HoverBg";
import HoverBorder from "./HoverBorder";

const FaqCard = ({ H3, P, isOpen, onToggle }: CardFaqProps) => {
  return (
    <div className="border border-gray-15 p-7.5 lg:p-10 2xl:p-12.5 rounded-xl justify-between flex flex-col gap-5 lg:gap-6 2xl:gap-7.5 h-full relative transition-all duration-500 ease-out overflow-hidden group">
      <HoverBg />

      {/* Card content */}
      <h3 className="font-semibold text-lg lg:text-xl 2xl:text-2xl leading-[150%] relative z-10 transition-all duration-300 hover:text-primary-60 hover:translate-x-2">
        {H3}
      </h3>
      <p className="text-text-secondary text-sm lg:text-base 2xl:text-lg relative z-10 transition-colors duration-500 hover:text-text-main">
        {P}
      </p>
      <div className="w-full md:w-fit relative z-10">
        {!isOpen ? (
          <Button variant="secondary" onClick={onToggle}>
            Read More
          </Button>
        ) : (
          <div className="transition-all duration-700 ease-out animate-fadeIn">
            <p
              className="text-text-secondary text-sm lg:text-base 2xl:text-lg cursor-pointer duration-300 hover:text-text-main"
              onClick={onToggle}
            >
              {P}
            </p>
          </div>
        )}
      </div>

      <HoverBorder />
    </div>
  );
};

export default FaqCard;
