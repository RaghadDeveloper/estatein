import Slider from "../components/layouts/Slider";
import CallToActionSection from "../components/sections/CallToActionSection";

const Home = () => {
  const cards=[1,2,3]
  return <div>Home
    <CallToActionSection/>
    <Slider cards={cards}/>
  </div>;
};

export default Home;
