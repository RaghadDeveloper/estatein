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
import { photos } from "../../data/propertiesData"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"

const PropertySlider = () => {
  return (
    <div className="p-5 lg:p-10 2xl:p-12.5 border border-gray-15 bg-gray-10">

      {/* الصور الكبيرة كسلايدر */}
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={1}
        spaceBetween={30}
        className="mb-5 2xl:mb-7.5"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-7.5">
              {photo.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
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
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  )
}

export default PropertySlider
