import { useSelector } from "react-redux";
import { propertiesHeaderData } from "../../data/homeData";
import SectionContainer from "../layouts/SectionContainer";
import Slider from "../layouts/Slider";
import PropertyCard from "../ui/PropertyCard";
import SectionHeader from "../ui/SectionHeader";
import type { PillInfoProps, PropertyData } from "../../interfaces";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import SliderPages from "../ui/SliderPages";
import Bedroom from "../icons/Bedroom";
import Bathroom from "../icons/Bathroom";
import { HiOfficeBuilding } from "react-icons/hi";

const FeaturedProperties = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const properties = useSelector(
    (state: { properties: { all: PropertyData[] } }) => state.properties.all,
  );

  const propertiesCards = properties.map((property: PropertyData) => {
    const infos: PillInfoProps[] = [
      {
        Icon: Bedroom,
        label: "Bedroom",
        value: String(property.bedrooms),
      },
      {
        Icon: Bathroom,
        label: "Bathroom",
        value: String(property.bathrooms),
      },
      {
        Icon: HiOfficeBuilding,
        label: property.propertyType,
      },
    ];
    return (
      <PropertyCard
        key={property.id}
        {...property}
        infos={infos}
        subTitle={undefined}
      />
    );
  });

  const sliderId = "featured-properties";

  const totalPages = swiper
    ? Math.ceil(
        propertiesCards.length /
          (typeof swiper.params.slidesPerView === "number"
            ? swiper.params.slidesPerView
            : 1),
      )
    : 0;

  return (
    <SectionContainer>
      <SectionHeader {...propertiesHeaderData} />
      <Slider
        sliderId={sliderId}
        cards={propertiesCards}
        spaceBetween={30}
        swiperRef={setSwiper}
        onSlideIndexChange={setActiveIndex}
      />

      <SliderPages
        prevClass={`slider-prev-${sliderId}`}
        nextClass={`slider-next-${sliderId}`}
        currentPage={activeIndex + 1}
        totalPages={totalPages}
        isPrevDisabled={activeIndex === 0}
        isNextDisabled={activeIndex === totalPages - 1}
        text="View All Properties"
        link="/properties"
      />
    </SectionContainer>
  );
};

export default FeaturedProperties;
