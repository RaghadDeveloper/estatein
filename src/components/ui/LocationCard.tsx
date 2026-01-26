import { buttonDataLocation } from "../../data/contactData";
import type { LocationsCardProps } from "../../interfaces";
import ButtonLocations from "./ButtonLocations";

function LocationCard(data: LocationsCardProps) {
  return (
    <div className="flex flex-col  2xl:w-[785px]  2xl:gap-[40px] 2xl:p-[50px] border-1 border-gray-15 rounded-xl lg:w-[630px]  lg:gap-[30px] lg:p-[40px] w-[357px] h-fit p-[24px] gap-[24px]">
      <div className="flex flex-col 2xl:gap-[14px] lg:gap-[10px] gap-[8px]">
        <p className="2xl:text-[18px] text-[14px]">{data.title}</p>
        <h3 className="2xl:text-[30px] lg:text-24px] text-[20px]">{data.H3}</h3>
        <p className="2xl:text-[18px] lg:text-[16px] text-[14px] text-gray-60">
          {data.text}
        </p>
      </div>
      <div className="flex gap-[10px] flex-wrap">
        {buttonDataLocation.map((item) => (
          <ButtonLocations Bool={true} variant="BgGray">
            {(item.text == "info@estatein.com" && (
              <a href={`mailto:${item.text}`} className="flex gap-[6px]">
                <img src={item.Img} alt="emailImg" />
                {item.text}
              </a>
            )) ||
              (item.text == "+1 (123) 456-7890" && (
                <a href={`tel:${item.text}`} className="flex gap-[6px]">
                  <img src={item.Img} alt="phoneImg" />
                  {item.text}
                </a>
              )) ||
              (item.text == "Metropolis" && (
                <a
                  href={`https://www.google.com/maps?q=${item.text}`}
                  className="flex gap-[6px]"
                >
                  <img src={item.Img} alt="locationImg" />
                  {item.text}
                </a>
              ))}
          </ButtonLocations>
        ))}
      </div>
      <button className="w-full 2xl:py-[18px] 2xl:px-[24px] rounded-lg text-center bg-primary-60 2xl:text-[18px] text-[14px] py-[14px] px-[20px] ">
        {" "}
        Get Direction{" "}
      </button>
    </div>
  );
}

export default LocationCard;
