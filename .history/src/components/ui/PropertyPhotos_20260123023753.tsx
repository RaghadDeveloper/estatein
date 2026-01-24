import { useState } from "react"
import { photos } from "../../data/propertiesData"

const PropertyPhotos = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="flex justify-between gap-2.5 lg:gap-5 py-2.5 lg:py-5 border border-gray-15 rounded-xl
    p-5 lg:p-10 2xl:p-12.5 mb-5 2xl">
      {photos.map((photo, index) => {
        const isActive = index === activeIndex
        return (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative w-36 aspect-4/3 border-0 rounded-md overflow-hidden"
          >
            <img
              className="w-full h-full object-cover"
              src={photo.images[0].source}
              alt={photo.images[0].alternative}
            />
            {!isActive && (
              <span className="absolute inset-0 bg-[#0A0A0A80] transition-opacity"></span>
            )}
          </button>
        )
      })}
    </div>
  )
}

export default PropertyPhotos
