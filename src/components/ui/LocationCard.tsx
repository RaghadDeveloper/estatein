import { buttonDataLocation } from "../../data/contactData";
import type { LocationsCardProps } from "../../interfaces";
import Button from "./Button";
import ButtonLocations from "./ButtonLocations";
import LocarionHref from "./LocarionHref";

function LocationCard(data: LocationsCardProps) {
  return (
    <div className="flex flex-col 2xl:gap-10 2xl:p-12.5 border border-gray-15 rounded-xl lg:gap-7.5 lg:p-10 w-full flex-1 p-6 gap-6">
      <div className="flex flex-col 2xl:gap-3.5 lg:gap-2.5 gap-2 h-full">
        <p className="2xl:text-[18px] text-[14px]">{data.title}</p>
        <h3 className="2xl:text-[30px] lg:text-[24px] text-[20px] flex-1">
          {data.H3}
        </h3>
        <p className="2xl:text-[18px] lg:text-[16px] text-[14px] text-gray-60 flex-1">
          {data.text}
        </p>
      </div>
      <div className="flex gap-2.5 flex-wrap">
        {buttonDataLocation.map((item) => (
          <ButtonLocations Bool={true} variant="BgGray">
            <LocarionHref {...item} />
          </ButtonLocations>
        ))}
      </div>
      <Button variant="primary">
        Get Direction
      </Button>
    </div>
  );
}

export default LocationCard;
