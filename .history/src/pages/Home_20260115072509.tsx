import Slider from "../components/layouts/Slider";
import CallToActionSection from "../components/sections/CallToActionSection";

const Home = () => {
  const cards=[1,2,3,4,5,6,7,8,9,10,11]
  return <div>Home
    <CallToActionSection/>
    <Slider cards={cards}
  </div>;
};

export default Home;
