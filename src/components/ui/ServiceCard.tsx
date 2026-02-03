import type { ServiceCardProps } from "../../interfaces";

function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="border border-gray-15 p-6 lg:p-10 2xl:p-12.5 rounded-xl flex flex-col gap-4 lg:gap-5 2xl:gap-7.5 h-full w-full bg-bg-main">
      <div className="flex items-center gap-4">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 lg:w-15 lg:h-15 2xl:w-20.5 2xl:h-20.5 object-contain shrink-0"
        />

        <h3 className=" font-semibold leading-tight text-lg lg:text-xl 2xl:text-2xl min-[1440px]:text-[20px] min-[1920px]:text-[24px] wrap-break-word">
          {title}
        </h3>
      </div>

      <p className="text-text-secondary leading-[150%] text-sm lg:text-base 2xl:text-lg">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
