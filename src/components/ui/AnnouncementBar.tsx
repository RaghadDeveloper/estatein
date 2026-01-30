import { useState } from "react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [Open, setOpen] = useState(true);
  return (
    <div>
      {Open == true && (
        <div className="flex relative lg:justify-center justify-start  2xl:py-4.5 2xl:px-40 lg:px-20 px-4 lg:py-3.5 pt-10 pb-5 ps-4 bg-gray-10">
          <div className="absolute inset-0 bg-[url('/assets/images/abstractDesign/announcement.png')] bg-cover bg-center opacity-30"></div>
          <div className="2xl:text-[18px] lg:text-[14px] text-[12px]">
            ✨Discover Your Dream Property with Estatein
            <button className="underline underline-offset-1 ml-2.5 cursor-pointer">
              <Link to="/">Learn More</Link>
            </button>
          </div>

          <button onClick={() => setOpen(!Open)}>
            <div className="cursor-pointer rounded-4xl 2xl:h-6 2xl:w-6 lg:h-6.5 lg:w-6.5 h-6.5 w-6.5 bg-[#FFFFFF1A] absolute 2xl:right-4 2xl:top-4.5 2xl:p-1.5 top-9 right-4 lg:right-8 lg:top-2.75 flex justify-center items-center">
              <img
                src="/assets/icons/cancel.svg"
                alt="ImgAnnouncementBar"
                className=" 2xl:h-3 2xl:w-3 lg:h-3 lg:w-3 h-2.25 w-2.25"
              />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default AnnouncementBar;
