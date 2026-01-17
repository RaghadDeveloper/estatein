import Achievements from "../components/sections/Achievements";
import Clients from "../components/sections/Clients";
import HowItWorks from "../components/sections/HowItWorks";
import {
  achievementsCardsData,
  achievementsHeaderData,
} from "../data/aboutData";

const About = () => {
  return (
    <div>
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
