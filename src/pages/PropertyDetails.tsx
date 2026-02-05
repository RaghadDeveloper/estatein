import { useParams } from "react-router-dom";
import CallToActionSection from "../components/sections/CallToActionSection";
import { useSelector } from "react-redux";
import Faq from "../components/sections/Faq";
import InquireForm from "../components/sections/InquireForm";
import PropertySlider from "../components/sections/PropertySlider";
import ComprehensivePricing from "../components/sections/ComprehensivePricing";
import PropertyDetailsSec from "../components/sections/PropertyDetailsSec";
import PropertyDetailsHeader from "../components/ui/PropertyDetailsHeader";
import { selectProperty } from "../redux/properties/propertiesSelectors";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = useSelector(selectProperty(id!));

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div>
      <PropertyDetailsHeader />
      <PropertySlider photos={property.photos} />
      {/* <PropertySlider /> */}
      <PropertyDetailsSec />
      <InquireForm />
      <ComprehensivePricing />
      <Faq />
      <CallToActionSection />
    </div>
  );
};

export default PropertyDetails;
