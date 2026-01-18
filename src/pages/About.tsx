import AboutHero from "../components/sections/AboutHero";
import Achievements from "../components/sections/Achievements";
import Clients from "../components/sections/Clients";
import {
  achievementsCardsData,
  achievementsHeaderData,
} from "../data/aboutData";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Achievements
        headerData={achievementsHeaderData}
        cards={achievementsCardsData}
      />
      <Clients />
    </div>
  );
};

export default About;
