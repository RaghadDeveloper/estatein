import { useDispatch, useSelector } from "react-redux";
import { portfolioHeaderData } from "../../data/propertiesData";
import type { PropertyData } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import PropertyCard from "../ui/PropertyCard";
import PropertyFilters from "../ui/PropertyFilters";
import SectionHeader from "../ui/SectionHeader";
import Slider from "../layouts/Slider";
import { selectFilteredProperties } from "../../redux/slice/propertiesSelectors";
import { useEffect } from "react";
import { clearFilters } from "../../redux/slice/propertiesSlice";

const Portfolio = () => {
  const dispatch = useDispatch();
  const properties = useSelector(selectFilteredProperties);

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  const propertiesCards = properties.map((property: PropertyData) => {
    return <PropertyCard key={property.id} {...property} />;
  });

  return (
    <div className="flex flex-col gap-20 lg:gap-30 2xl:gap-37.5">
      <div className="relative flex flex-col gap-40">
        <PropertyFilters />
      </div>
      <SectionContainer>
        <SectionHeader {...portfolioHeaderData} />
        <Slider cards={propertiesCards} spaceBetween={30} />
      </SectionContainer>
    </div>
  );
};

export default Portfolio;
