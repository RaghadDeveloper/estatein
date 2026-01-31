import { useState } from "react";
import { ClientCardData, clientsHeaderData } from "../../data/aboutData";
import type { Clientcarddata } from "../../interfaces";
import SectionContainer from "../layouts/SectionContainer";
import Slider from "../layouts/Slider";
import ClientCard from "../ui/ClientCard";
import SectionHeader from "../ui/SectionHeader";
import type { Swiper as SwiperType } from "swiper";
import SliderPages from "../ui/SliderPages";

const Clients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const sliderId = "clients";

  const cards = ClientCardData.map((item: Clientcarddata) => (
    <ClientCard key={item.title} {...item} />
  ));

  const totalPages = swiper
    ? Math.ceil(
        cards.length /
          (typeof swiper.params.slidesPerView === "number"
            ? swiper.params.slidesPerView
            : 1),
      )
    : 0;

  return (
    <SectionContainer>
      <SectionHeader {...clientsHeaderData} />
      <Slider
        sliderId={sliderId}
        cards={cards}
        cardsPerView={2}
        spaceBetween={50}
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
  );
};

export default Clients;
