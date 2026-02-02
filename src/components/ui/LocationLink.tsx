import type { LocationLinkType } from "../../interfaces";
import { getFinalLink } from "../../utiles/helpers";

function LocationLink(link: LocationLinkType) {
  return (
    <a
      href={`${getFinalLink(link.type, link.text)}`}
      className="flex gap-1.5 bg-gray-10 py-2.5 px-4 2xl:py-[14] 2xl:px-[20] border border-gray-15 rounded-4xl 2xl:text-[18px] text-[14px]"
    >
      <img src={link.Img} alt={`${link.type}`} />
      {link.text}
    </a>
  );
}

export default LocationLink;
