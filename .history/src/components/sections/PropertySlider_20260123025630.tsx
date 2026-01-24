import { useState } from "react"
import { photos } from "../../data/propertiesData"
import PropertyPhotos from "../ui/PropertyPhotos"

const PropertySlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImages = photos[activeIndex].images
  return (
    <div className="p-5 lg:p-10 2xl:p-12.5 border border-gray-15 bg-gray-10">
      <div className="grid grid-cols-2 gap-5 mb-5 2xl:mb-7.5">
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

      <PropertyPhotos
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  )
}

export default PropertySlider
