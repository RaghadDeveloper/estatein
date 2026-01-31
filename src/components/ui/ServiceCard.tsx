import { useTheme } from "../../context/ThemeContext";
import type { ServiceCardProps } from "../../interfaces";

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const {theme}=useTheme()
  return (
    <div className="border border-gray-15 p-6 md:p-8 lg:p-10 rounded-xl flex flex-col gap-6 h-full font-urbanist w-full bg-gray-08">
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={title}
          className="w-10 h-10 lg:w-14 lg:h-14 object-contain shrink-0"
        />

        <h3 className={`${theme=="light"? "text-black":" text-white"} font-semibold leading-tight text-[16px] md:text-[18px] min-[1440px]:text-[20px] min-[1920px]:text-[24px] wrap-break-word`}>
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
