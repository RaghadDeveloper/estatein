
import SectionContainer from "../components/layouts/SectionContainer";
import Achievements from "../components/sections/Achievements";
import { achievementsCardsData, achievementsHeaderData } from "../data/aboutData";

const About = () => {
  return <div>
    <SectionContainer>
      <Achievements headerData={achievementsHeaderData} cards={achievementsCardsData}/>
    </SectionContainer>
  </div>;
};

export default About;
