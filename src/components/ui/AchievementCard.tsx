import type { AchievementsCardProps } from "../../interfaces";
import HoverXBg from "./HoverXBg";
import HoverBorder from "./HoverBorder";

const AchievementCard = ({ title, text }: AchievementsCardProps) => {
  return (
    <article className=" relative overflow-hidden flex flex-col h-full shadow-[0px_0px_0px_4px_var(--color-shadow)] lg:shadow-[0px_0px_0px_6px_var(--color-shadow)] 2xl:shadow-[0px_0px_0px_8px_var(--color-shadow)] p-7.5 lg:p-10 2xl:p-12.5 rounded-[10px] 2xl:rounded-xl transition-all duration-1000 ease-out group group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:blur-0">
      <HoverXBg />

      <h3 className="text-[20px] font-semibold mb-4 lg:text-[24px] lg:mb-6 2xl:text-[30px] 2xl:mb-7.5">
        {title}
      </h3>
      <p className="flex-1 text-sm font-medium text-text-secondary lg:text-base 2xl:text-lg">
        {text}
      </p>

      <HoverBorder />
    </article>
  );
};

export default AchievementCard;
