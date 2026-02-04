import type { StepCardProps } from "../../interfaces";
import HoverBg from "./HoverBg";
const StepCard = ({ stepNumber, title, description }: StepCardProps) => {
  return (
    <div className="flex flex-col w-full lg:max-w-103.25 2xl:max-w-lg font-urbanist mx-auto lg:mx-0">
      <div className="relative border-l border-primary-60 px-4 2xl:px-5 py-3.5 2xl:py-4">
        <span className="text-base 2xl:text-xl font-medium leading-[150%]">
          {stepNumber}
        </span>
      </div>
      <div className="relative group overflow-hidden">

        <div className="relative lg:h-55.5 min:h-66.75! p-px rounded-xl rounded-tl-none overflow-hidden bg-[linear-gradient(135deg,var(--color-primary-60),rgba(112,59,247,0.2)_20%,rgba(38,38,38,1)_100%)] transition-all duration-500 ease-out hover:opacity-100">
        <HoverBg />
          <div className="relative w-full h-full bg-bg-main rounded-[inherit] p-7.5 md:p-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(circle_at_0%_0%,var(--color-primary-60),transparent_20%)]"></div>

            <div className="z-10 flex justify-center flex-col h-full">
              <h3 className="text-[18px] min-[1440px]:text-[20px] min-[1920px]:text-[26px] font-semibold mb-3.5 lg:mb-4 2xl:mb-5 leading-[150%]">
                {title}
              </h3>
              <p className="text-text-secondary text-sm md:text-base leading-[150%] font-light line-clamp-4">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
