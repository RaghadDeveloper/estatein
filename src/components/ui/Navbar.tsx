import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [Open, setOpen] = useState(false)
  return <div className="bg-gray-10 flex justify-around px-4 py-5 xl:text-[18px] md:text-[14px] items-center sticky w-full  top-0 h-fit z-50 ">
    {(Open == false) && <img src="/assets/images/logo/fullLogo.png" alt="Logo" className="2xl:w-4 2xl:h-15 md:w-28.25 md:h-8 w-23.25 h-7" />}
    <div>
      <ul className="sm:flex gap-7.5 hidden ">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5 rounded-lg border border-gray-15 " : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15" : ""}>About Us</NavLink></li>
        <li><NavLink to="/properties" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15" : ""}>Properties</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15" : ""}>Services</NavLink></li>
      </ul>
    </div>
    <button ><NavLink to="/contact" className={({ isActive }) => isActive ? "2xl:py-4 2xl:px-6 py-3.5 px-5 bg-primary-60 rounded-xl sm:flex  hidden  border border-gray-15 2xl:h-14.75  2xl:w-35  " : "2xl:py-4 2xl:px-4 py-3.5 px-5 bg-gray-08 rounded-xl sm:flex  hidden  border border-gray-15 2xl:h-14.75 2xl:w-35"}>Contact Us</NavLink></button>
    {
      (Open == false) && <button className="sm:hidden flex" onClick={() => setOpen(!Open)}>
        <img src="/public/assets/icons/bars.svg" alt="ImbBar" />
      </button>
    }
    {
      (Open == true) &&
      <div className="flex flex-col gap-6.25 h-full w-full ">
        <div className="flex justify-between p-5">
          <img src="/assets/images/logo/fullLogo.png" alt="Logo" className="2xl:w-40 2xl:h-15 md:w-28.25 md:h-8 w-23.25" />
          <button onClick={() => setOpen(!Open)}><img src="/assets/icons/cancel.svg" alt="cancel" className="w-6" /></button>
        </div>
        <div className="sm:hidden gap-8.75 flex flex-col items-center" >
          <ul className=" gap-7.5 flex flex-col items-center">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5 py-2.5 px-5 rounded-lg  border border-gray-15" : ""} onClick={() => setOpen(!Open)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5  py-2.5 px-5 rounded-lg border border-gray-15" : ""} onClick={() => setOpen(!Open)}>About Us</NavLink></li>
            <li><NavLink to="/properties" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5  py-2.5 px-5 rounded-lg border border-gray-15" : ""} onClick={() => setOpen(!Open)}>Properties</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5  py-2.5 px-5 rounded-lg border border-gray-15" : ""} onClick={() => setOpen(!Open)}>Services</NavLink></li>
          </ul>
          <button><NavLink to="/contact" className={({ isActive }) => isActive ? "bg-gray-08 px-3.75  rounded-xl   py-2.5 px-3.75 bg-primary-60  rounded-xl h-fit  border border-gray-15 " : "py-2.5 px-3.75 bg-gray-08  rounded-xl h-fit  border border-gray-15"} onClick={() => setOpen(!Open)}>Contact Us</NavLink></button>
        </div>

      </div>
    }

  </div>
};

export default Navbar;