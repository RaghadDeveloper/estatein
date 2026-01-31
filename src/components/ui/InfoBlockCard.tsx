import type { InfoBlockCardProps } from "../../interfaces";

const InfoBlockCard = ({ label, icon, value }: InfoBlockCardProps) => {
  return (
    <>
      <div className="flex items-center gap-1 text-white/60 text-sm">
        <img
          src={`/assets/icons/${icon}.svg`}
          className="w-6 h-6 opacity-60 transition-transform duration-300 group-hover:scale-110"
        />
        <span className=" font-urbanist font-medium tracking-[0%] text-[14px] leading-[150%] w-28.75 h-5.25 xl:text-[18px] xl:leading-[150%] xl:w-42.75 xl:h-6.75 ">
          {label}
        </span>
      </div>
      <span className="text-white text-2xl font-bold">
        {label === "Area"
          ? `${value?.toLocaleString()} Square Feet`
          : `0${value}`}
      </span>
    </>
  );
};

export default InfoBlockCard;
