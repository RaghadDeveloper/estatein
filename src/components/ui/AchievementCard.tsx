import type { AchievementsCardProps } from "../../interfaces";

const AchievementCard = ({ title, text }: AchievementsCardProps) => {
  return (
    <article className="flex flex-col h-full shadow-[0px_0px_0px_4px_var(--color-gray-09)] lg:shadow-[0px_0px_0px_6px_var(--color-gray-09)] 2xl:shadow-[0px_0px_0px_8px_var(--color-gray-09)] p-7.5 lg:p-10 2xl:p-12.5 rounded-[10px] 2xl:rounded-xl">
      <h3 className="text-[20px] font-semibold mb-4 lg:text-[24px] lg:mb-6 2xl:text-[30px] 2xl:mb-7.5">
        {title}
      </h3>
      <p className="flex-1 text-sm font-medium text-gray-60 lg:text-base 2xl:text-lg">
        {text}
      </p>
    </article>
  );
};

export default AchievementCard;
