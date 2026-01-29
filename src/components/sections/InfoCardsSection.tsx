import type { InfoCardSectionProps } from "../../interfaces";
import InfoCard from "../ui/InfoCard";

const InfoCardsSection = ({
  cards,
  rounded,
}: InfoCardSectionProps) => {
  return (
    <div
      className={`grid grid-cols-2 grid-rows-2 lg:grid-rows-1 lg:grid-cols-4 gap-2.5 2xl:gap-5 border border-gray-15 bg-gray-08 lg:border-s-0 lg:border-e-0 lg:rounded-none p-2.5 2xl:p-5 shadow-[0px_0px_0px_4px_var(--color-gray-09)] lg:shadow-[0px_0px_0px_6px_var(--color-gray-09)] xl:shadow-[0px_0px_0px_10px_var(--color-gray-09)] ${
        rounded && "rounded-xl"
      }`}
    >
      {cards.map((card) => (
        <div key={card.id}>
          <InfoCard {...card} />
        </div>
      ))}
    </div>
  );
};

export default InfoCardsSection;
