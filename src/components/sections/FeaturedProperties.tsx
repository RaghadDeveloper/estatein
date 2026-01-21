import { useSelector } from "react-redux";
import { propertiesHeaderData } from "../../data/homeData";
import SectionContainer from "../layouts/SectionContainer";
import Slider from "../layouts/Slider";
import PropertyCard from "../ui/PropertyCard";
import SectionHeader from "../ui/SectionHeader";
import type { PropertyData } from "../../interfaces";

const FeaturedProperties = () => {
  const propertiesData = useSelector(
    (state: { properties: { properties: PropertyData[] } }) =>
      state.properties.properties
  );

  const propertiesCards = propertiesData.map((property) => {
    const infos = [
      {
        icon: "assets/icons/Bedroom.svg",
        label: "Bedroom",
        value: property.bedrooms,
      },
      {
        icon: "/assets/icons/Bathroom.svg",
        label: "Bathroom",
        value: property.bathrooms,
      },
      {
        icon: "assets/icons/Villa.svg",
        label: property.propertyType,
      },
    ];
    return <PropertyCard key={property.id} {...property} infos={infos} />;
  });

  return (
    <SectionContainer>
      <SectionHeader {...propertiesHeaderData} />
      <Slider cards={propertiesCards} spaceBetween={30} />
    </SectionContainer>
  );
};

export default FeaturedProperties;
