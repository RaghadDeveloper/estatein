import type { StepCardProps } from "../../interfaces";
const StepCard = ({
  stepNumber,
  title,
  description,
}: StepCardProps) => {
  return (
    <div className="flex flex-col w-full lg:max-w-103.25 2xl:max-w-lg font-urbanist mx-auto lg:mx-0">
      <div className="relative border-l border-primary-60 px-4 2xl:px-5 py-3.5 2xl:py-4 ml-px">
        <span className="text-base 2xl:text-xl font-medium leading-[150%]">
          {stepNumber}
        </span>
      </div>

      <div 
        className="relative lg:h-55.5 [@media(min-width:1441px)]:h-66.75! p-[1px] rounded-xl rounded-tl-none overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #703BF7 0%, rgba(112, 59, 247, 0.2) 20%, rgba(38, 38, 38, 1) 100%)`,
        }}
      >
        <div className="relative w-full h-full bg-gray-08 rounded-[inherit] p-7.5 md:p-10 overflow-hidden">
          
          <div
            className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
            style={{
              background: `radial-gradient(circle at 0% 0%, #703BF7 0%, transparent 20%)`,
            }}
          ></div>

          <div className="relative z-10 flex justify-center flex-col h-full">
            <h3 className="text-[18px] min-[1440px]:text-[20px] min-[1920px]:text-[26px] font-semibold mb-3.5 lg:mb-4 2xl:mb-5 leading-[150%]">
              {title}
            </h3>
            <p className="text-gray-60 text-sm md:text-base leading-[150%] font-light line-clamp-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepCard;