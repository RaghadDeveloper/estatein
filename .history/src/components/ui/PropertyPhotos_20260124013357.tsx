import { photos } from "../../data/propertiesData"
import type { PropertyPhotosProps } from "../../interfaces"

const PropertyPhotos = ({activeIndex,setActiveIndex}:PropertyPhotosProps) => {
  return (
    <div className="flex justify-between gap-2.5 lg:gap-5 p-2.5 lg:p-5 bg-
    border border-gray-15 rounded-xl
    mb-5 2xl:mb-7.5">
      {photos.map((photo, index) => {
        const isActive = index === activeIndex
        return (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative w-36 aspect-4/3 border-0 rounded-md overflow-hidden cursor-pointer"
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
