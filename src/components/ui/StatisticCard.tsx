import type { StatisticCardType } from "../../interfaces";

const StatisticCard = ({ card }: { card: StatisticCardType }) => {
  const { value, text } = card;
  return (
    <div className="flex-1 flex flex-col gap-0.5 items-center lg:items-start border border-gray-15 rounded-lg 2xl:rounded-xl p-4 lg:px-5 lg:py-3.5 2xl:px-6 2xl:py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:border-primary-60 group">
      <p className="font-bold text-2xl lg:text-3xl 2xl:text-[40px] leading-[150%] transition-colors duration-300 group-hover:text-primary-70">
        {value}+
      </p>
      <h3 className="text-nowrap text-gray-60 text-[14px] lg:text-[16px] 2xl:text-lg leading-[150%] transition-colors duration-300 group-hover:text-primary-70">
        {text}
      </h3>
    </div>
  );
};

export default StatisticCard;
