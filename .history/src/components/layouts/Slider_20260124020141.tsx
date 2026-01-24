import type { SliderProps } from "../../interfaces"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import SliderButton from "../ui/SliderButton"
import { useState } from "react"
import type { Swiper as SwiperType } from "swiper"

const Slider = ({
  cards = [],
  cardsPerView = 3,
  spaceBetween = 24,
  text,
  onSlideIndexChange,
  swiperRef,
  className = "normal",
}: SliderProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [activeSlidesPerView, setActiveSlidesPerView] =
    useState<number>(cardsPerView)

  const totalPages = Math.ceil(cards.length / activeSlidesPerView)
  const isPrevDisabled = currentPage === 1
  const isNextDisabled = currentPage === totalPages
  const [show, setShow] = useState<boolean>(true)

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
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: spaceBetween === 50 ? 40 : 20,
          },
          1280: {
            slidesPerView: cardsPerView,
            slidesPerGroup: cardsPerView,
            spaceBetween: spaceBetween === 50 ? 40 : 20,
          },
          1536: {
            slidesPerView: cardsPerView,
            slidesPerGroup: cardsPerView,
            spaceBetween: spaceBetween,
          },
        }}
        onSlideChange={(swiper: SwiperType) => {
          const slidesView =
            typeof swiper.params.slidesPerView === "number"
              ? swiper.params.slidesPerView
              : cardsPerView

          const newIndex = Math.floor(swiper.realIndex / slidesView)
          setActiveSlidesPerView(slidesView)
          setCurrentPage(newIndex + 1)
          onSlideIndexChange?.(newIndex)
        }}
        onSwiper={(swiper) => swiperRef?.(swiper)}
        className="items-stretch!"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="h-auto flex">
            <div className="h-full w-full flex">{card}</div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default Slider
