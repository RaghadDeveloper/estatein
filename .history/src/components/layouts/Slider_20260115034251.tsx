import type { SliderProps } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderButton from "../ui/SliderButton";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const Slider = ({
  cards = [],
  cardsPerView = 3,
  spaceBetween = 24,
}: SliderProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSlidesPerView, setActiveSlidesPerView] =useState(cardsPerView);
  const totalPages = Math.ceil(cards.length / activeSlidesPerView);
  return (
    <div className="relative">
      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={cardsPerView}
        slidesPerGroup={cardsPerView}
        spaceBetween={spaceBetween}
        navigation={{
          prevEl: ".slider-prev",
          nextEl: ".slider-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: cardsPerView,
            slidesPerGroup: cardsPerView,
          },
        }}
        onSlideChange={(swiper: SwiperType) => {
          const slidesView =
            typeof swiper.params.slidesPerView === "number"
              ? swiper.params.slidesPerView
              : cardsPerView;
          setActiveSlidesPerView(slidesView);
          setCurrentPage(
            Math.floor(swiper.realIndex / slidesView) + 1
          );
}}

      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>{card}</SwiperSlide>
        ))}
      </Swiper>
      {/* Controls (خارج Swiper) */}
      <div className="mt-6 flex justify-between items-center">
        <button className="border border-gray-15 py-3.5 px-5 text-[14px] text-white lg:hidden rounded-xl">
          View All FAQ’s
        </button>
        <div className="hidden lg:block">
          <span className="text-white">
            {String(currentPage).padStart(2, "0")}
          </span>
          <span className="text-gray-60"> of </span>
          <span className="text-gray-60">
            {String(totalPages).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <SliderButton
            className="slider-prev"
            image={{
              source: "/assets/icons/arrowleft.svg",
              source_alternative:"/assets/icons",
              alternative: "arrow left",
            }}
          />
          <div className="block lg:hidden">
            <span className="text-white">
              {String(currentPage).padStart(2, "0")}
            </span>
            <span className="text-gray-60"> of </span>
            <span className="text-gray-60">
              {String(totalPages).padStart(2, "0")}
            </span>
          </div>
          <SliderButton
            className="slider-next"
            image={{
              source: "/assets/icons/arrowright.svg",
              alternative: "arrow right",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
