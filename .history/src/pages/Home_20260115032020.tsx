import Slider from "../components/layouts/Slider";
import CallToActionSection from "../components/sections/CallToActionSection";

const Home = () => {
  return <div>Home
    <CallToActionSection/>
    <Slider
  cards={[
    <PropertyCard key={1} />,
    <PropertyCard key={2} />,
    <PropertyCard key={3} />,
  ]}
/>

  </div>;
};

export default Home;
