import { statisticCards } from "../../data/statisticCardsData";
import StatisticCard from "./StatisticCard";

const StatisticsCardsGorup = () => {
  return (
    <div className="flex flex-wrap gap-3 lg:gap-4 2xl:gap-5 w-full">
      {statisticCards.map((card, index) => (
        <StatisticCard key={index} card={card} />
      ))}
    </div>
  );
};

export default StatisticsCardsGorup;
