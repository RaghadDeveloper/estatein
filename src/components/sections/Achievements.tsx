import type { AchievementsSectionProps } from "../../interfaces";
import AchievementCard from "../ui/AchievementCard";
import SectionHeader from "../ui/SectionHeader";

const Achievements = ({headerData, cards} : AchievementsSectionProps) => {
  return <div>
    <SectionHeader {...headerData} />
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5 xl:gap-10">
      {cards.map((card) => (
        <div key={card.id}>
          <AchievementCard {...card} />
        </div>
      ))}
    </div>
  </div>;
};

export default Achievements;
