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
  activeIndex,
  onSlideIndexChange,
  swiperRef,
  onDotClick,
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

      {/* ========== NORMAL MODE ========== */}
      {className === "normal" && (
        <div>
          {!show && (
            <div className="mt-6 grid grid-cols-1 gap-6">
              {cards.map((card, index) => (
                <div key={index}>{card}</div>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-between items-center border-t border-gray-15 pt-7.5 lg:pt-4 2xl:pt-5">
            <button
              onClick={() => setShow(!show)}
              className={`${!show && "mx-auto"}
                border border-gray-15 py-3.5 px-5 text-[14px]
                text-white lg:hidden rounded-xl`}
            >
              {text}
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

            <div
              className={`${show ? "block" : "hidden"} flex items-center gap-2.5`}
            >
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
      )}

      {/* ========== GALLERY MODE ========== */}
      {className === "gallery" && (
        <div
          className="
            flex items-center lg:w-fit mx-auto p-2.5 mt-5 2xl:mt-7.5
            rounded-[100px] bg-gray-08 gap-2.5 justify-between
          "
        >
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

          <div className="flex gap-0.75">
            {cards.map((_, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={index}
                  onClick={() => onDotClick?.(index)}
                  className={`
                    w-[11.17px] h-0.75 rounded-[60px] cursor-pointer
                    transition-colors
                    ${isActive ? "bg-[#703BF7]" : "bg-[#4D4D4D]"}
                  `}
                />
              )
            })}
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
      )}
    </div>
  )
}

export default Slider
