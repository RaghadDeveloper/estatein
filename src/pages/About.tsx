import Achievements from "../components/sections/Achievements";
import Clients from "../components/sections/Clients";
import Values from "../components/sections/Values";
import {
  achievementsCardsData,
  achievementsHeaderData,
} from "../data/aboutData";

const About = () => {
  return (
    <div>
      <Values />
      <Achievements
        headerData={achievementsHeaderData}
        cards={achievementsCardsData}
      />
      <Clients />
    </div>
  );
};

export default About;
