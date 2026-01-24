import { useParams } from "react-router-dom";
import CallToActionSection from "../components/sections/CallToActionSection";
import { useSelector } from "react-redux";
import type { PropertyData } from "../interfaces";
import Faq from "../components/sections/Faq";

import InquireForm from "../components/sections/InquireForm";


const PropertyDetails = () => {
  const { id } = useParams();

  const property = useSelector(
    (state: { properties: { properties: PropertyData[] } }) =>
      state.properties.properties.find(
        (item: PropertyData) => item.id === Number(id)
      )
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  console.log(property);
  return (
    <div>
      <Faq />
      <CallToActionSection />
    </div>
  );
  return <div>
    <InquireForm />
  </div>;
};

export default PropertyDetails;
