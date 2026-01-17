import type { SliderProps } from "../../interfaces";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SliderButton from "../ui/SliderButton";

const Slider = ({
  cards,
  cardsPerView = 3,
  spaceBetween = 24,
}: SliderProps) => {
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
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            {card}
          </SwiperSlide>
        ))}
      {/* buttons */}
        <div>
          <SliderButton image={{source:"/assets/arrowleft.svg",alternative:"arrow left"}}/>
          <SliderButton image={{source:"/assets",alternative:""}}/>
        </div>
      </Swiper>


    </div>
  );
};

export default Slider;
