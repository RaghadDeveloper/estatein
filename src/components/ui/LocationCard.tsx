import type { LocationsCardProps } from "../../interfaces";
import Button from "./Button";
import HoverXBg from "./HoverXBg";
import LocationLink from "./LocationLink";

function LocationCard(data: LocationsCardProps) {
  return (
    <div className="relative group overflow-hidden flex flex-col 2xl:gap-10 2xl:p-12.5 border border-gray-15 rounded-xl lg:gap-7.5 lg:p-10 w-full flex-1 p-6 gap-6 min-[850px]:max-w-1/2">
      <HoverXBg />
      <div className="flex flex-col 2xl:gap-3.5 lg:gap-2.5 gap-2 h-full">
        <p className="2xl:text-[18px] text-[14px]">{data.title}</p>
        <h3 className="2xl:text-[30px] lg:text-[24px] text-[20px] flex-1">
          {data.H3}
        </h3>
        <p className="2xl:text-[18px] lg:text-[16px] text-[14px] text-text-secondary flex-1">
          {data.text}
        </p>
      </div>
      <div className="flex gap-2.5 flex-wrap">
        {data.locationLinks.map((item) => (
          <LocationLink key={item.type} {...item} />
        ))}
      </div>
      <div>
        <Button variant="primary">Get Direction</Button>
      </div>
    </div>
  );
}

export default LocationCard;
