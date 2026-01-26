import type { SliderProps } from "../../interfaces"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

const Slider = ({
  cards = [],
  cardsPerView = 3,
  spaceBetween = 24,
  onSlideIndexChange,
  swiperRef,
  sliderId = "default",
}: SliderProps) => {
  const prevClass = `slider-prev-${sliderId}`
  const nextClass = `slider-next-${sliderId}`

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={cardsPerView}
        slidesPerGroup={cardsPerView}
        spaceBetween={spaceBetween}

        navigation={{
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }}

        onBeforeInit={(swiper) => {
          swiper.params.navigation!.prevEl = `.${prevClass}`
          swiper.params.navigation!.nextEl = `.${nextClass}`
        }}

        onSlideChange={(swiper: SwiperType) => {
          const slidesView =
            typeof swiper.params.slidesPerView === "number"
              ? swiper.params.slidesPerView
              : cardsPerView

          const newIndex = Math.floor(swiper.realIndex / slidesView)
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
