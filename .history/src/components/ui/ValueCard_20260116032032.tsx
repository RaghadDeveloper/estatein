import type { ValueCardProps } from "../../interfaces";

const ValueCard = ({className,isLast,image,title,description}:ValueCardProps) => {
  return <div 
  className={`${className=="odd"?"lg:pl-6 2xl:pl-7.5 lg:border-l lg:border-gray-15":"lg:pr-6 2xl:pr-7.5"}
  ${isLast}`}>
    <div className="flex items-center gap-2 lg:gap-2.5 2xl:gap-3.5 mb-3.5 lg:mb-4 2xl:mb-5">
      <div className="flex justify-center items-center w-13 lg:w-15 2xl:w-18.5 h-13 lg:h-15 2xl:h-18.5
      border border-primary-60 rounded-full">
        <img src={image.source} alt={image.alternative} />
      </div>
      <h3 className="font-semibold text-white text-[18px] lg:text-[20px] 2xl:">{title}</h3>
    </div>
    <p className="font-medium text-gray-60 text-[14px]
    lg:text-[16px] 2xl:text-[18px] max-w-102.25">{description}</p>
  </div>
}

export default ValueCard;
