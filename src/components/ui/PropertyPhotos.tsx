import { photos } from "../../data/propertiesData";
import type { PropertyPhotosProps } from "../../interfaces";

const PropertyPhotos = ({
  activeIndex,
  setActiveIndex,
}: PropertyPhotosProps) => {
  return (
    <div className="flex justify-between gap-2.5 lg:gap-5 p-2.5 lg:p-5 bg-bg-main border border-gray-15 rounded-xl mt-5 lg:mt-0 mb-5 2xl:mb-7.5 overflow-x-auto lg:overflow-visible lg:flex-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {photos.map((photo, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className="relative grow shrink-0 lg:shrink w-16.75 lg:w-36 aspect-4/3 border-0 rounded-md overflow-hidden cursor-pointer"
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
        );
      })}
    </div>
  );
};

export default PropertyPhotos;
