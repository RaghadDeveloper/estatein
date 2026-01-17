import type { AchievementsCardProps } from "../../interfaces";

const AchievementCard = ({ title, text }: AchievementsCardProps) => {
  return (
    <article className="flex flex-col h-full bg-gray-08 shadow-[0px_0px_0px_4px_#191919] lg:shadow-[0px_0px_0px_6px_#191919] 2xl:shadow-[0px_0px_0px_8px_#191919] p-7.5 lg:p-10 2xl:p-12.5 rounded-[10px] 2xl:rounded-xl">
      <h3 className="text-[20px] font-semibold mb-4 lg:text-[24px] lg:mb-6 2xl:text-[30px] 2xl:mb-7.5">
        {title}
      </h3>
      <p className="flex-1 text-[14px] font-medium text-gray-60 lg:text-[16px] 2xl:text-[18px]">
        {text}
      </p>
    </article>
  );
};

export default AchievementCard;
