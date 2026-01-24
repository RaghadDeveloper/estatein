/* import { useState } from "react"
import { photos } from "../../data/propertiesData"
import PropertyPhotos from "../ui/PropertyPhotos"

const PropertySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImages = photos[activeIndex].images
  return (
    <div className="p-5 lg:p-10 2xl:p-12.5 border border-gray-15 bg-gray-10">
        <PropertyPhotos
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <div className="grid grid-cols-2 gap-7.5 mb-5 2xl:mb-7.5">
        {activeImages.map((image, index) => (
          <div
            key={index}
            className="aspect-4/3 rounded-xl overflow-hidden"
          >
            <img
              src={image.source}
              alt={image.alternative}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PropertySlider
 */
import { useState } from "react"
import { photos } from "../../data/propertiesData"
import Slider from "../shared/Slider"
import PropertyPhotos from "../ui/PropertyPhotos"
import type { Swiper as SwiperType } from "swiper"

const PropertySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  const cards = photos.map((photo, index) => (
    <div key={index} className="grid grid-cols-2 gap-7.5">
      {photo.images.map((image, i) => (
        <div
          key={i}
          className="aspect-[4/3] rounded-xl overflow-hidden"
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

  return (
    <div className="p-5 lg:p-10 2xl:p-12.5 border border-gray-15 bg-gray-10">

      {/* thumbnails */}
      <PropertyPhotos
        activeIndex={activeIndex}
        setActiveIndex={(index) => {
          setActiveIndex(index)
          swiper?.slideTo(index)
        }}
      />

      {/* main slider */}
      <Slider
        cards={cards}
        cardsPerView={1}
        spaceBetween={40}
        text="Show all photos"
        swiperRef={setSwiper}
        onSlideIndexChange={setActiveIndex}
      />
    </div>
  )
}

export default PropertySlider
