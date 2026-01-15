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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeSlidesPerView, setActiveSlidesPerView] =useState<number>(cardsPerView);
  const totalPages = Math.ceil(cards.length / activeSlidesPerView);
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;
  const [show,setShow]=useState<boolean>(true)
  return (
    <div className="relative">
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
      <div className="mt-6 flex justify-between items-center">
        <button onClick={()=>setShow(!s)} className="border border-gray-15 py-3.5 px-5 text-[14px]
        text-white lg:hidden rounded-xl">
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
          disabled={isPrevDisabled}
          image={{
            source: isPrevDisabled
              ? "/assets/icons/arrowleft.svg"
              : "/assets/icons/arrowleftwhite.svg",
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
            disabled={isNextDisabled}
            image={{
              source: isNextDisabled
                ? "/assets/icons/arrowright.svg"
                : "/assets/icons/arrowrightwithe.svg",
              alternative: "arrow right",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
