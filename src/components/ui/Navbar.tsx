import { useState } from "react";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
  const [Open, setOpen] = useState(false)
  return <div className="bg-gray-10 flex justify-around  py-[20px] xl:text-[18px] md:text-[14px] ">
    <img src="/assets/images/logo/fullLogo.png" alt="Logo" className="2xl:w-[160px] 2xl:h-[60px] md:w-[113px] md:h-[32px] w-[93px] h-[28px]" />
    <div>
      <ul className="sm:flex gap-[30px] hidden">
        <li><NavLink to="/" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px] rounded-lg border border-gray-15 ":""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px]  rounded-lg border border-gray-15":""}>About Us</NavLink></li>
        <li><NavLink to="/properties" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px]  rounded-lg border border-gray-15":""}>Properties</NavLink></li>
        <li><NavLink to="/services" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px]  rounded-lg border border-gray-15":""}>Services</NavLink></li>
      </ul>
    </div>
    <button className="2xl:py-[16px] 2xl:px-[24px] lg:py-[14px] lg:px-[20px] bg-gray-08 rounded-xl sm:flex  hidden  border border-gray-15 2xl:h-[59px] 2xl:w-[140px]"><NavLink to="/contact" className={({isActive})=>isActive?"bg-gray-08  w-[88px] p-0":""}>Contact Us</NavLink></button>
    {
      (Open == false) && <button className="sm:hidden flex" onClick={() => setOpen(!Open)}>
        <img src="/public/assets/icons/bars.svg" alt="ImbBar" />
      </button>
    }
    {
      (Open == true) && <div className="sm:hidden gap-[10px] flex flex-col items-center" onClick={() => setOpen(!Open)}>
        <ul className=" gap-[10px] flex flex-col items-center">
          <li><NavLink to="/" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px] py-[10px] px-[20px] rounded-lg  border border-gray-15":""}>Home</NavLink></li>
          <li><NavLink to="/about" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px]  py-[10px] px-[20px] rounded-lg border border-gray-15":""}>About Us</NavLink></li>
          <li><NavLink to="/properties" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px]  py-[10px] px-[20px] rounded-lg border border-gray-15":""}>Properties</NavLink></li>
          <li><NavLink to="/services" className={({isActive})=>isActive?"bg-gray-08 2xl:py-[14px] 2xl:px-[24px] lg:py-[12px] lg:px-[20px]  py-[10px] px-[20px] rounded-lg border border-gray-15":""}>Services</NavLink></li>
        </ul>
        <button className="py-[10px] px-[15px] bg-gray-08  rounded-xl h-fit  border border-gray-15" ><NavLink to="/contact" className={({isActive})=>isActive?"bg-gray-08 py-[16px] px-[24px]  rounded-lg ":""}>Contact Us</NavLink></button>
      </div>
    }

  </div>
};

export default Navbar;