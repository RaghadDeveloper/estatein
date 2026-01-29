import { useParams } from "react-router-dom";
import CallToActionSection from "../components/sections/CallToActionSection";
import { useSelector } from "react-redux";
import type { PropertyData } from "../interfaces";
import Faq from "../components/sections/Faq";
import InquireForm from "../components/sections/InquireForm";
import PropertySlider from "../components/sections/PropertySlider";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = useSelector(
    (state: { properties: { all: PropertyData[] } }) =>
      state.properties.all.find((item: PropertyData) => item.id === Number(id))
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  console.log(property);
  return (
    <div>
      <PropertySlider />
      <InquireForm />
      <Faq />
      <CallToActionSection />
    </div>
  );
};

export default PropertyDetails;
