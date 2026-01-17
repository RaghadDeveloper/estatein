import type { SliderProps } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderButton from "../ui/SliderButton";
import { useState } from "react";

const Slider = ({
  cards,
  cardsPerView = 3,
  spaceBetween = 24,
}: SliderProps) => {
   const totalPages = Math.ceil(cards.length / cardsPerView);
  const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <div className="relative">
      {/* الحاوية الأصلية */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={cardsPerView}
        spaceBetween={spaceBetween}
        navigation={{
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: cardsPerView },
        }}
        onSlideChange={(swiper: SwiperType) => {
          const page =
            Math.floor(swiper.realIndex / cardsPerView) + 1;
            setCurrentPage(page)
        }}
      >
        {cards?.map((card, index) => (
          <SwiperSlide key={index}>
            {card}
          </SwiperSlide>
        ))}
      {/* buttons */}
        <div>
          <div>
            <span>{String(currentPage).padStart(2, "0")}</span>
            <span> of </span>
            <span>{String(totalPages).padStart(2, "0")}</span>
          </div>
          <div className="flex gap-2.5">
            <SliderButton image={{source:"/assets/icons/arrowleft.svg",alternative:"arrow left"}}/>
            <SliderButton image={{source:"/assets/icons/arrowright.svg",alternative:"arrow right"}}/>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
