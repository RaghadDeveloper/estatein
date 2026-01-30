import { useParams } from "react-router-dom";
import CallToActionSection from "../components/sections/CallToActionSection";
import { useSelector } from "react-redux";
import type { PropertyData } from "../interfaces";
import Faq from "../components/sections/Faq";
import InquireForm from "../components/sections/InquireForm";
import PropertySlider from "../components/sections/PropertySlider";
import ComprehensivePricing from "../components/sections/ComprehensivePricing";
import PropertyDetailsSec from "../components/sections/PropertyDetailsSec";
import PropertyDetailsHeader from "../components/ui/PropertyDetailsHeader";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = useSelector(
    (state: { properties: { all: PropertyData[] } }) =>
      state.properties.all.find((item: PropertyData) => item.id === Number(id)),
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  // property deytails
  console.log(property);


  const propertyName = property.title;
  const propertyLocation = property.location;
  const propertyPrice = property.price.toString();
  const propertyBedrooms = property.bedrooms;
  const propertyBathrooms = property.bathrooms;
  const propertyArea = property.area;
  const propertyDescription = property.description;

  return (
    <div>
      <PropertyDetailsHeader
        name={propertyName}
        location={propertyLocation}
        price={propertyPrice}
      />
      <PropertySlider />
      <PropertyDetailsSec
        description={propertyDescription}
        bedrooms={propertyBedrooms}
        bathrooms={propertyBathrooms}
        area={propertyArea}
      />
      <InquireForm
        propertyName={propertyName}
        propertyLocation={propertyLocation}
      />
      <ComprehensivePricing propertyPrice={propertyPrice} />
      <Faq />
      <CallToActionSection />
    </div>
  );
};

export default PropertyDetails;
