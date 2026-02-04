import type { LocationLinkType } from "../../interfaces";
import { getFinalLink } from "../../utiles/helpers";

function LocationLink(link: LocationLinkType) {
  return (
    <a
      href={`${getFinalLink(link.type, link.text)}`}
      className=" relative flex items-center cursor-pointer gap-1.5 bg-bg-secondary py-2.5 px-4 2xl:py-[14] 2xl:px-[20] border border-gray-15 rounded-4xl 2xl:text-[18px] text-[14px]"
    >
      <link.icon className=" rotate-y-180" />
      <span>{link.text}</span>
    </a>
  );
}

export default LocationLink;
