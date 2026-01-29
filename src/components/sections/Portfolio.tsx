import { useDispatch, useSelector } from "react-redux";
import { portfolioHeaderData } from "../../data/propertiesData";
import type { PropertyData } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import PropertyCard from "../ui/PropertyCard";
import PropertyFilters from "../ui/PropertyFilters";
import SectionHeader from "../ui/SectionHeader";
import Slider from "../layouts/Slider";
import { selectFilteredProperties } from "../../redux/slice/propertiesSelectors";
import { useEffect, useState } from "react";
import { clearFilters } from "../../redux/slice/propertiesSlice";
import type { Swiper as SwiperType } from "swiper";
import SliderPages from "../ui/SliderPages";

const Portfolio = () => {
  const dispatch = useDispatch();
  const properties = useSelector(selectFilteredProperties);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const sliderId = "portfolio";

  const propertiesCards = properties.map((property: PropertyData) => {
    return <PropertyCard key={property.id} {...property} />;
  });

  const totalPages = swiper
    ? Math.ceil(
        propertiesCards.length /
          (typeof swiper.params.slidesPerView === "number"
            ? swiper.params.slidesPerView
            : 1),
      )
    : 0;

  useEffect(() => {
    return () => {
      dispatch(clearFilters());
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-20 lg:gap-30 2xl:gap-37.5">
      <div className="relative flex flex-col gap-40">
        <PropertyFilters />
      </div>
      <SectionContainer>
        <SectionHeader {...portfolioHeaderData} />
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
        />
      </SectionContainer>
    </div>
  );
};

export default Portfolio;
