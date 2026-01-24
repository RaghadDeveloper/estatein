import type { ServiceCardProps } from "../../interfaces";

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div
      className="
      border border-gray-15 p-6 md:p-8 lg:p-10 rounded-[12px] flex flex-col gap-6 h-full font-urbanist 
      w-full 
   
    "
    >
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={title}
          className="w-10 h-10 lg:w-14 lg:h-14 object-contain shrink-0"
        />

        <h3
          className="
          text-white font-semibold leading-tight
          text-[16px] md:text-[18px]               
          min-[1440px]:text-[20px] 
          min-[1920px]:text-[24px]  
          break-words
        "
        >
          {title}
        </h3>
      </div>

      <p className="text-gray-60 leading-relaxed text-sm lg:text-base">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
