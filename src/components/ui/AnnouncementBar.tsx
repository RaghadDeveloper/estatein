import { useState } from "react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [Open, setOpen] = useState(true);
  return (
    <div>
      {Open == true && (
        <div className="flex relative  lg:justify-center justify-start  2xl:py-[18px] 2xl:px-[160px] lg:px-[80px] lg:py-[14px] pt-[40px] pb-[20px] ps-[16px] bg-[url(`/assets/images/abstractDesign/announcement.png`) bg-cover bg-center h-screen]">
          <div className="font-[400] 2xl:text-[18px] lg:text-[14px] text-[12px]">
            ✨Discover Your Dream Property with Estatein
            <button className="underline underline-offset-1 ml-[10px]">
              <Link to="/">Learn More</Link>
            </button>
          </div>

          <button onClick={() => setOpen(!Open)}>
            <div className=" rounded-4xl 2xl:h-[24px] 2xl:w-[24px] lg:h-[26px] lg:w-[26px] h-[26px] w-[26px] bg-[#FFFFFF1A] absolute 2xl:right-[16px] 2xl:top-[18px] 2xl:p-[6px] top-[36px] right-[16px] lg:right-[32px] lg:top-[11px] ">
              <img
                src="/assets/icons/cancel.svg"
                alt="ImgAnnouncementBar"
                className=" 2xl:h-[12px] 2xl:w-[12px]  lg:h-[12px] lg:w-[12px] h-[9px] w-[9px] right-[8.5px] top-[8.5px]  absolute  2xl:right-[6px] 2xl:top-[6px] lg:right-[5.5px] lg:top-[5.5px] "
              />
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default AnnouncementBar;
