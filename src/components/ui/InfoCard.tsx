import { Link } from "react-router-dom";
import type { InfoCardProps } from "../../interfaces";

const InfoCard = ({
  icon,
  text,
  socials,
  link,
  externalLink,
}: InfoCardProps) => {
  return (
    <article className="py-5 px-3.5 lg:py-7.5 lg:px-4 2xl:py-10 2xl:px-5 bg-gray-10 border border-gray-15 rounded-[10px] flex flex-col relative items-center justify-center h-full">
      {/* Link Arrow */}
      {externalLink ? (
        <a href="">
          <img
            className="absolute top-[24.38px] right-[24.38px] xl:top-[26.38px] xl:right-[26.38px] w-[16.25px] xl:w-[21.5px] cursor-pointer"
            src="assets/icons/arrowgrey.svg"
            alt=""
          />
        </a>
      ) : (
        <Link to={`${link}`}>
          <img
            className="absolute top-[24.38px] right-[24.38px] xl:top-[26.38px] xl:right-[26.38px] w-[16.25px] xl:w-[21.5px] cursor-pointer"
            src="assets/icons/arrowgrey.svg"
            alt=""
          />
        </Link>
      )}

      {/* Card Icon */}
      <div className="flex items-center justify-center relative w-12 h-12 lg:w-15 lg:h-15 2xl:w-20.5 2xl:h-20.5">
        {/* borders */}
        <div className="absolute h-full w-full">
          {/* outer border */}
          <div className="w-full h-full rounded-full p-[0.6px] rotate-12 bg-[conic-gradient(#A685FA,#A685FA,#A685FA,#A685FA00,#A685FA00,#A685FA,#A685FA,#A685FA,#A685FA,#A685FA00,#A685FA00,#A685FA)]">
            <div className="rounded-full bg-gray-10 w-full p-1.5 lg:p-2 xl:p-2.5 h-full">
              {/* inner border */}
              <div className="rounded-full p-[0.6px] -rotate-12 bg-[conic-gradient(#A685FA00,#A685FA00,#A685FA,#A685FA,#A685FA00,#A685FA00,#A685FA,#A685FA,#A685FA00)] h-full w-full">
                <div className="bg-gray-10 flex items-center justify-center h-full w-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        {/* icon */}
        <img
          className="w-4 lg:w-[19.2px] 2xl:w-[30.6px] relative"
          src={icon}
          alt=""
        />
      </div>

      {/* Card Text */}
      <h3 className="text-[14px] lg:text-[16px] 2xl:text-[20px] mt-3.5 lg:mt-4 2xl:mt-5 font-semibold flex-1 text-center cursor-default">
        {socials ? (
          <div className="flex flex-wrap gap-2.5 lg:gap-5 2xl:gap-">
            {socials.map((link) => (
              <span
                key={link.label}
                className="cursor-pointer hover:text-primary-75"
              >
                <a href={link.link}>{link.label}</a>
              </span>
            ))}
          </div>
        ) : (
          text
        )}
      </h3>
    </article>
  );
};

export default InfoCard;
