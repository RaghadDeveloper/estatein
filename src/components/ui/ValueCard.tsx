import type { ValueCardProps } from "../../interfaces";

const ValueCard = ({
  className,
  isLast,
  image,
  title,
  description,
}: ValueCardProps) => {
  return (
    <div
      className={`group ${
        className == "odd"
          ? "lg:pl-6 2xl:pl-7.5 lg:border-l lg:border-gray-15"
          : "lg:pr-6 2xl:pr-7.5"
      }
  ${
    isLast
      ? "pb-0 mb-0 border-b-0"
      : "pb-5 lg:pb-0 mb-5 lg:mb-0 border-b lg:border-b-0 border-gray-15"
  }`}
    >
      <div className="flex items-center gap-2 lg:gap-2.5 2xl:gap-3.5 mb-3.5 lg:mb-4 2xl:mb-5">
        <div className="flex justify-center items-center w-13 lg:w-15 2xl:w-18.5 h-13 lg:h-15 2xl:h-18.5 border border-primary-60 rounded-full transition-all duration-500 ease-in-out group-hover:border-white group-hover:rotate-12 group-hover:scale-105 group-hover:bg-primary-60">
          <img
            src={image.source}
            alt={image.alternative}
            className="transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <h3 className="font-semibold text-[18px] lg:text-[20px] 2xl:text-2xl text-nowrap transition-colors duration-300 group-hover:text-primary-60">
          {title}
        </h3>
      </div>
      <p className="font-medium leading-normal text-text-secondary text-[14px] lg:text-[16px] 2xl:text-[18px] max-w-102.25 transition-colors duration-300 group-hover:text-text-main">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
