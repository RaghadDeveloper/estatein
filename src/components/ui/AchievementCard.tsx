import type { AchievementsCardProps } from "../../interfaces";

const AchievementCard = ({title, text} : AchievementsCardProps) => {
  return (
    <article
      className="flex flex-col h-full bg-gray-08 shadow-[0px_0px_0px_4px_#191919] p-7.5 lg:p-10 xl:p-12.5 rounded-[10px] xl:rounded-xl">
      <h3 className="text-[20px] font-semibold mb-4 lg:text-[24px] lg:mb-6 xl:text-[30px] xl:mb-7.5">{title}</h3>
      <p className="flex-1 text-[14px] font-medium text-gray-60 lg:text-[16px] xl:text-[18px]">{text}</p>
    </article>
  );
};

export default AchievementCard;
