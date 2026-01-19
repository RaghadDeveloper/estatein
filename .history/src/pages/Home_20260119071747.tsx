<<<<<<< HEAD
import SectionContainer from "../components/layouts/SectionContainer";
import Values from "../components/sections/Values";

const Home = () => {
  return <div>Home
    <SectionContainer>
      <Values/>
    </SectionContainer>
  </div>;
=======
import HomeHero from "../components/sections/HomeHero";
import InfoCardsSection from "../components/sections/InfoCardsSection";
import { infoCardsData } from "../data/homeData";
import Testimonials from "../components/sections/Testimonials";
import Faq from "../components/sections/Faq";
import CallToActionSection from "../components/sections/CallToActionSection";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <InfoCardsSection cards={infoCardsData} />
      <Testimonials />
      <Faq />
      <CallToActionSection />
    </div>
  );
>>>>>>> 412f4d2cad68700e785e931ab0d94a830a493ca2
};

export default Home;
