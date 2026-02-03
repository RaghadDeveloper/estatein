import React from "react";
import type { MemberCardProps } from "../../interfaces";

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  position,
  imageUrl,
}) => {
  return (
    <div className=" w-full border border-gray-15 rounded-xl p-5 lg:p-6 2xl:p-7.5 flex flex-col items-center transition-all duration-300 hover:border-primary-60 hover:shadow-[0_20px_50px_rgba(112,59,247,0.25)]">
      <div className="relative w-full overflow-visible mb-10 lg:mb-12.5">
        <div className="rounded-[10px] overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto aspect-318/268 lg:aspect-257/220 2xl:aspect-317/253 object-cover"
          />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 px-5 py-2.5 2xl:px-6.5 2xl:py-3.5 rounded-full bg-primary-60 flex items-center justify-center shadow-xl z-10">
          <img
            src={"/assets/icons/twitter.svg"}
            alt="Twitter"
            className="w-5 h-5 2xl:w-6 2xl:h-6"
          />
        </div>
      </div>

      <h3 className="text-xl 2xl:text-2xl font-semibold text-white mb-0.5 lg:mb-1 text-center">
        {name}
      </h3>
      <p className="text-text-secondary text-[16px] 2xl:text-lg mb-4 lg:mb-5 text-center">
        {position}
      </p>

      <button className=" w-full flex items-center justify-between bg-bg-secondary hover:bg-gray-15 rounded-full p-2 pl-6 lg:p-2.5 lg:pl-5 2xl:p-3.5 2xl:pl-6 transition border border-gray-15">
        <span className="flex items-center gap-2 text-sm lg:text-base 2xl:text-lg">
          <span>Say Hello 👋</span>
        </span>

        <span className="p-3.5 lg:p-2 2xl:p-2.5 rounded-full bg-primary-60 flex items-center justify-center transition group-hover:scale-110">
          <img
            src={"/assets/icons/telegramicon.svg"}
            alt="Arrow"
            className="w-5 h-5 2xl:w-6 2xl:h-6"
          />
        </span>
      </button>
    </div>
  );
};

export default MemberCard;
