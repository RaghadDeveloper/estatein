import HomeHero from "../components/sections/HomeHero";
import Testimonials from "../components/sections/Testimonials";
import Faq from "../components/sections/Faq";
import CallToActionSection from "../components/sections/CallToActionSection";
import FeaturedProperties from "../components/sections/FeaturedProperties";
import FormAuth from "../components/ui/FormAuth";
import type { InputProps } from "../interfaces";

const Home = () => {
  const inputs:InputProps[]=[
    {
      label:"Email",
      type:"email",
      placeholder:"Enter your email"
    },
    {
      label:"Password",
      type:"password",
      placeholder:"Enter your password"
    }
  ]
  return (
    <div>
      
      <HomeHero />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
      <CallToActionSection />
      <FormAuth inputs={inputs} />
    </div>
  );
};

export default Home;
