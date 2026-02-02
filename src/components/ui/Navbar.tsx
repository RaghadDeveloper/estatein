import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/homeData";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <nav className="bg-gray-10 px-4 py-5 lg:px-20 lg:py-3.5 2xl:px-40.5 2xl:py-5 sticky w-full top-0 h-fit z-50 border-y border-gray-15">
      {/* Large Screens Nav */}
      <div className="flex justify-between items-center font-medium text-[14px] 2xl:text-[18px]">
        {/* logo */}
        <div>
          <img
            src="/assets/images/logo/fullLogo.png"
            alt="Logo"
            className="2xl:w-40 2xl:h-15 md:w-28.25 md:h-8 w-23.25 h-7"
          />
        </div>
        {/* nav links */}
        <ul className="hidden md:flex gap-1 2xl:gap-1.5">
          {navLinks.map(
            (navLink) =>
              navLink.label !== "Contact Us" && (
                <li key={navLink.label}>
                  <NavLink
                    to={`${navLink.link}`}
                    className={({ isActive }) =>
                      `py-3 px-5 2xl:py-3.5 2xl:px-6 rounded-lg border-gray-15 ${
                        isActive ? "bg-gray-08 border" : ""
                      }`
                    }>
                    {navLink.label}
                  </NavLink>
                </li>
              ),
          )}
        </ul>
        {/* contact */}
        <div>
          <NavLink
            to={navLinks[navLinks.length - 1].link}
            className={({ isActive }) =>
              `py-3.5 px-5 2xl:py-4 2xl:px-6 rounded-xl md:inline-block hidden  border border-gray-15 ${
                isActive ? "bg-primary-60" : "bg-gray-08"
              }`
            }>
            {navLinks[4].label}
          </NavLink>
        </div>
        {/* nav bars for small screens */}
        {Open == false && (
          <button className="md:hidden flex" onClick={() => setOpen(!Open)}>
            <img src="/assets/icons/bars.svg" alt="ImbBar" />
          </button>
        )}
      </div>
      {/* Small Screens Nav */}
      <div
        className={`md:hidden absolute flex flex-col gap-6.25 h-screen w-screen ${Open ? "top-0" : "-top-[200vh]"} right-0 left-0 bg-gray-09 transition-all duration-300`}>
        <div className="flex justify-between p-5">
          {/* logo */}
          <img
            src="/assets/images/logo/fullLogo.png"
            alt="Logo"
            className="2xl:w-40 2xl:h-15 md:w-28.25 md:h-8 w-23.25"
          />
          {/* close btn */}
          <button onClick={() => setOpen(!Open)}>
            <img src="/assets/icons/cancel.svg" alt="cancel" className="w-6" />
          </button>
        </div>
        {/* nav links */}
        <div className="flex flex-col gap-8 items-center text-center">
          <ul className="flex flex-col gap-6">
            {navLinks.map(
              (navLink) =>
                navLink.label !== "Contact Us" && (
                  <li key={navLink.label}>
                    <NavLink
                      to={`${navLink.link}`}
                      onClick={() => setOpen(!Open)}
                      className={({ isActive }) =>
                        `py-3 px-5 2xl:py-3.5 2xl:px-6 rounded-lg border-gray-15 ${
                          isActive ? "bg-gray-08 border" : ""
                        }`
                      }>
                      {navLink.label}
                    </NavLink>
                  </li>
                ),
            )}
          </ul>
          {/* contact */}
          <div>
            <NavLink
              to={navLinks[navLinks.length - 1].link}
              onClick={() => setOpen(!Open)}
              className={({ isActive }) =>
                `py-3.5 px-5 2xl:py-4 2xl:px-6 rounded-xl border border-gray-15 ${
                  isActive ? "bg-primary-60" : "bg-gray-08"
                }`
              }>
              {navLinks[4].label}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;