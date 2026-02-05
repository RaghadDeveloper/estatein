import { useState } from "react";
import PropertyPhotos from "../ui/PropertyPhotos";
import SliderDots from "../ui/SliderDots";
import type { Swiper as SwiperType } from "swiper";
import Slider from "../layouts/Slider";

const PropertySlider = ({ photos }: { photos: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const sliderId = "property";

  const cards = photos.map((photo, i) => (
    <div
      key={i}
      className="w-full lg:aspect-585/5072xl:aspect-733/583 rounded-xl overflow-hidden"
    >
      <img src={photo} alt="property" className="w-full h-full object-cover" />
    </div>
  ));

  const goToSlide = (slideIndex: number) => {
    if (!swiper) return;

    setSlidesPerView(
      typeof swiper.params.slidesPerView === "number"
        ? swiper.params.slidesPerView
        : 1,
    );

    const pageIndex = Math.floor(slideIndex / slidesPerView);

    setActiveIndex(pageIndex);
    swiper.slideTo(slideIndex);
  };

  return (
    <div className="mx-4 lg:mx-20 min-[1730px]:mx-40.5! p-5 lg:p-10 min-[1730px]:p-12.5! border border-gray-15 bg-bg-secondary rounded-xl">
      <div className="flex flex-col-reverse lg:flex-col">
        {/* thumbnails */}
        <PropertyPhotos
          slidesPerView={Number(slidesPerView)}
          photos={photos}
          activeIndex={activeIndex}
          setActiveIndex={goToSlide}
        />
        {/* main slider */}
        <Slider
          sliderId={sliderId}
          cards={cards}
          cardsPerView={2}
          swiperRef={setSwiper}
          onSlideIndexChange={setActiveIndex}
        />
      </div>
      <SliderDots
        count={cards.length}
        activeIndex={activeIndex}
        onDotClick={(i) => swiper?.slideTo(i)}
        isPrevDisabled={activeIndex === 0}
        isNextDisabled={activeIndex === cards.length - 1}
        prevClass={`slider-prev-${sliderId}`}
        nextClass={`slider-next-${sliderId}`}
      />
    </div>
  );
};
export default PropertySlider;
