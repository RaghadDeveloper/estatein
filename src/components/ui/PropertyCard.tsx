import React, { useState } from "react";
import PillInfo from "./PillInfo";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import PriceValue from "./PriceValue";
import type { PropertyCardProps } from "../../interfaces";

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  photos,
  description,
  infos,
  price,
  subTitle,
}) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const needsReadMore = description.length > 100;
  const shortDescription = description.substring(0, 74) + "...";

  return (
    <div
      className={`rounded-xl border ${
        isExpanded ? "border-primary-60 z-50" : "border-gray-15 shadow-md"
      } overflow-hidden flex flex-col justify-between h-full w-full relative transition-all duration-500 ease-in-out group gap-4 lg:gap-5 2xl:gap-7.5 p-6 lg:p-7.5 2xl:p-10`}
    >
      {photos && photos.length > 0 && (
        <div className="h-52.5 sm:h-65 lg:h-63.75 2xl:h-79.5 overflow-hidden rounded-lg relative mx-auto w-full">
          <img
            src={photos[0]}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-col justify-between h-full">
        <div className=" flex flex-col flex-1 relative z-20">
          {subTitle && (
            <div className="mb-4 2xl:mb-5">
              <PillInfo label={subTitle} />
            </div>
          )}

          <h3 className="text-lg lg:text-xl 2xl:text-2xl font-bold mb-0.5 lg:mb-1 2xl:mb-1.5 leading-[150%]">
            {title}
          </h3>

          <div className="mb-5 lg:mb-6 2xl:mb-7.5">
            <div
              className={` text-sm sm:text-base text-gray-40 transition-all duration-500 ease-in-out leading-relaxedd leading-[150%] ${
                isExpanded
                  ? "line-clamp-none p-4 sm:p-6 bg-[#1a1a1a]/90 rounded-xl shadow-2xl"
                  : "line-clamp-3"
              }`}
            >
              {isExpanded ? description : shortDescription}

              {needsReadMore && !isExpanded && (
                <button
                  onClick={() => setIsExpanded(true)}
                  className="ml-2 text-light-90 hover:text-primary-60 font-medium text-sm underline"
                >
                  Read More
                </button>
              )}
            </div>

            {isExpanded && (
              <button
                onClick={() => setIsExpanded(false)}
                className="mt-3 text-primary-60 hover:text-primary-65 font-medium text-sm"
              >
                Show Less
              </button>
            )}
          </div>

          <div className="flex gap-1.5 2xl:gap-2.5 flex-wrap">
            {infos &&
              infos.length > 0 &&
              infos.map((feature) => (
                <PillInfo key={feature.label} {...feature} />
              ))}
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-y-4 gap-x-7.5 lg:gap-x-10 2xl:gap-x-12.5 pt-5 lg:pt-6 min-[1730px]:pt-7.5!">
          <PriceValue title={"Price"} value={price} />

          <div className="flex-1">
            <Button
              variant="primary"
              onClick={() => navigate(`/properties/${id}`)}
            >
              View Property Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
