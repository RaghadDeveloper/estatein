import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [Open, setOpen] = useState(false);
  return (
    <div className="bg-gray-15 flex justify-around items-center py-[20px] xl:text-[18px] md:text-[14px] ">
      <img
        src="/assets/images/logo/fullLogo.png"
        alt="Logo"
        className="2xl:w-[160px] 2xl:h-[60px] md:w-[113px] md:h-[32px] w-[93px] h-[28px]"
      />
      <div>
        <ul className="sm:flex gap-[30px] hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-gray-08 p-[10px] rounded-lg " : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/properties"
              className={({ isActive }) =>
                isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
              }
            >
              Properties
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
              }
            >
              Services
            </NavLink>
          </li>
        </ul>
      </div>
      <button className="py-[16px] px-[24px] bg-gray-08 rounded-xl sm:flex  hidden">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
          }
        >
          Contact Us
        </NavLink>
      </button>
      {Open == false && (
        <button className="sm:hidden flex" onClick={() => setOpen(!Open)}>
          <img src="/public/assets/icons/bars.svg" alt="ImbBar" />
        </button>
      )}
      {Open == true && (
        <div
          className="sm:hidden gap-[10px] flex flex-col items-center"
          onClick={() => setOpen(!Open)}
        >
          <ul className=" gap-[10px] flex flex-col">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/properties"
                className={({ isActive }) =>
                  isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
                }
              >
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
                }
              >
                Services
              </NavLink>
            </li>
          </ul>
          <button className="py-[10px] px-[15px] bg-gray-08  rounded-xl h-fit">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "bg-gray-08 p-[10px]  rounded-lg" : ""
              }
            >
              Contact Us
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
