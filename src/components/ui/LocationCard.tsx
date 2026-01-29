import { buttonDataLocation } from "../../data/contactData";
import type { LocationsCardProps } from "../../interfaces";
import ButtonLocations from "./ButtonLocations";

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
            {(item.text == "info@estatein.com" && (
              <a href={`mailto:${item.text}`} className="flex gap-1.5">
                <img src={item.Img} alt="emailImg" />
                {item.text}
              </a>
            )) ||
              (item.text == "+1 (123) 456-7890" && (
                <a href={`tel:${item.text}`} className="flex gap-1.5">
                  <img src={item.Img} alt="phoneImg" />
                  {item.text}
                </a>
              )) ||
              (item.text == "Metropolis" && (
                <a
                  href={`https://www.google.com/maps?q=${item.text}`}
                  className="flex gap-1.5"
                >
                  <img src={item.Img} alt="locationImg" />
                  {item.text}
                </a>
              ))}
          </ButtonLocations>
        ))}
      </div>
      <button className="w-full 2xl:py-4.5 2xl:px-6 rounded-lg text-center bg-primary-60 2xl:text-[18px] text-[14px] py-3.5 px-5 ">
        {" "}
        Get Direction{" "}
      </button>
    </div>
  );
}

export default LocationCard;
