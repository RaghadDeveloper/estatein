import type { InfoBlockCardProps } from "../../interfaces";

const InfoBlockCard = ({ label, Icon, value }: InfoBlockCardProps) => {
  return (
    <>
      <div className="flex items-center gap-1 text-sm">
        <Icon color="text-text-secondary" />
        <span className=" font-urbanist text-text-secondary font-medium tracking-[0%] text-[14px] leading-[150%] w-28.75 h-5.25 xl:text-[18px] xl:leading-[150%] xl:w-42.75 xl:h-6.75 ">
          {label}
        </span>
      </div>
      <span className=" text-2xl font-bold">
        {label === "Area"
          ? `${value?.toLocaleString()} Square Feet`
          : `0${value}`}
      </span>
    </>
  );
};

export default InfoBlockCard;
