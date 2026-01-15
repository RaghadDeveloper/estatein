import type { InfoCardSectionProps } from "../../interfaces";
import InfoCard from "../ui/InfoCard";

const InfoCardsSection = ({ cards }: InfoCardSectionProps) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-2.5 xl:gap-5 border border-gray-15 bg-gray-08 lg:border-s-0 lg:border-e-0 rounded-xl lg:rounded-none p-2.5 xl:p-5 shadow-[0px_0px_0px_4px_#191919] lg:shadow-[0px_0px_0px_6px_#191919] xl:shadow-[0px_0px_0px_10px_#191919]">
      {cards.map((card) => (
        <div key={card.id}>
          <InfoCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default InfoCardsSection;
