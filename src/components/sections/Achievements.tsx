import {
  achievementsCardsData,
  achievementsHeaderData,
} from "../../data/aboutData";
import SectionContainer from "../layouts/SectionContainer";
import AchievementCard from "../ui/AchievementCard";
import SectionHeader from "../ui/SectionHeader";

const Achievements = () => {
  return (
    <SectionContainer>
      <SectionHeader {...achievementsHeaderData} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7.5 2xl:gap-10">
        {achievementsCardsData.map((card) => (
          <AchievementCard {...card} key={card.id} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Achievements;
