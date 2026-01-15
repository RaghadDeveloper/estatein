
import { useState } from "react";
import { Link } from "react-router-dom";

const AnnouncementBar = () => {
  const [Open, setOpen] = useState(true)
  return <div>{

    (Open==true)&&<div className="flex relative  lg:justify-center justify-start  py-[18px] px-[10px]">
      <div className="font-[400] xl:text-[18px] md:text-[14px] text-[12px]">
        ✨Discover Your Dream Property with Estatein
        <button className="border-0 border-b-2 border-white ml-[10px]"><Link to="/">Learn More</Link></button>
      </div>

      <button onClick={() => setOpen(!Open)}>
        <div className=" rounded-4xl md:h-[38px] md:w-[38px] h-[28px] w-[28px] bg-[#FFFFFF1A] p-2 absolute md:right-12 right-3 top-3">
          <img src="/assets/icons/cancel.svg" alt="ImgAnnouncementBar" className=" md:h-[25px] md:w-[25px] h-[15px] w-[15px]" />
        </div>
      </button>
    </div>}
  </div>
};

export default AnnouncementBar;
