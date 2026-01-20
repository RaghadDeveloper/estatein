import Achievements from "../components/sections/Achievements";
import Clients from "../components/sections/Clients";
import Values from "../components/sections/Values";
import HowItWorks from "../components/sections/HowItWorks";
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
      <HowItWorks />
      <Clients />
    </div>
  );
};

export default About;
