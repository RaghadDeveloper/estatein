import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [Open, setOpen] = useState(true);
  return (
    <>
      {Open == true && (
        <div className="flex relative lg:justify-center justify-start min-[1730]:py-4.5! min-[1730]:px-40! lg:px-20 px-4 lg:py-3.5 pt-10 pb-5 ps-4 bg-bg-secondary">
          <div className="absolute inset-0 bg-[url('/assets/images/abstractDesign/announcement.png')] bg-cover bg-center opacity-30"></div>
          <div className="2xl:text-[18px] lg:text-[14px] text-[12px]">
            ✨Discover Your Dream Property with Estatein
            <button className="underline underline-offset-1 ml-2.5 cursor-pointer">
              <Link to="/">Learn More</Link>
            </button>
          </div>

          <button onClick={() => setOpen(!Open)}>
            <div className="cursor-pointer rounded-4xl 2xl:h-8 2xl:w-8 h-6.5 w-6.5 bg-[#FFFFFF1A] light:bg-gray-60/40 absolute min-[1730px]:right-4! min-[1730px]:top-4.5! 2xl:p-1.5 top-9 right-4 lg:right-8 lg:top-2.75 flex justify-center items-center">
              <IoCloseOutline size={20} />
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default AnnouncementBar;
