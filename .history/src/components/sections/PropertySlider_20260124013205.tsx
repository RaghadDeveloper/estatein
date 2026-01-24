import { useState } from "react"
import { photos } from "../../data/propertiesData"
import PropertyPhotos from "../ui/PropertyPhotos"
import type { Swiper as SwiperType } from "swiper"
import Slider from "../layouts/Slider"

const PropertySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  const cards = photos.map((photo, index) => (
    <div key={index} className="grid grid-cols-2 gap-7.5">
      {photo.images.map((image, i) => (
        <div
          key={i}
          className="aspect-[4/3 rounded-xl overflow-hidden"
        >
          <img
            src={image.source}
            alt={image.alternative}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  ))

  const goToIndex = (index: number) => {
    setActiveIndex(index)
    swiper?.slideTo(index)
  }

  return (
    <div className="p-5 lg:p-10 2xl:p-12.5 border border-gray-15 bg-gray-10">

      {/* thumbnails */}
      <PropertyPhotos
        activeIndex={activeIndex}
        setActiveIndex={goToIndex}
      />

      {/* main slider */}
      <Slider
        cards={cards}
        cardsPerView={1}
        spaceBetween={40}
        text="Show all photos"
        swiperRef={setSwiper}
        activeIndex={activeIndex}
        onSlideIndexChange={setActiveIndex}
        onDotClick={goToIndex}
        className="gallery"
      />
    </div>
  )
}
export default PropertySlider
