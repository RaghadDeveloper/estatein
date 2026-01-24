import { useState } from "react"
import { photos } from "../../data/propertiesData"
import PropertyPhotos from "../ui/PropertyPhotos"
import type { Swiper as SwiperType } from "swiper"
import Slider from "../layouts/Slider"
import SliderDots from "../ui/SliderDots"

const PropertySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  const cards = photos.map((photo, index) => (
    <div key={index} className="grid grid-cols-2 gap-7.5">
      {photo.images.map((image, i) => (
        <div
          key={i}
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
  ))

  const goToIndex = (index: number) => {
    setActiveIndex(index)
    swiper?.slideTo(index)
  }

  return (
    
  )
}
export default PropertySlider
