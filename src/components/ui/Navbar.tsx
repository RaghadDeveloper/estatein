// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [Open, setOpen] = useState(false);
//   const toggleTheme = () => {
//     const current = document.documentElement.getAttribute("data-theme");
//     document.documentElement.setAttribute(
//       "data-theme",
//       current === "dark" ? "light" : "dark"
//     );
//   };

//   return (
//     <nav className="bg-gray-10 flex justify-between px-4 py-5 lg:px-20 lg:py-3.5 2xl:px-40.5 2xl:py-5 xl:text-[18px] md:text-[14px] items-center sticky w-full top-0 h-fit z-50 border-y border-gray-15">
//       {Open == false && (
//         <img
//           src="/assets/images/logo/fullLogo.png"
//           alt="Logo"
//           className="2xl:w-40 2xl:h-15 md:w-28.25 md:h-8 w-23.25 h-7"
//         />
//       )}
//       <div>
//         <ul className="md:flex gap-7.5 hidden text-sm 2xl:text-lg">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5 rounded-lg border border-gray-15 "
//                   : ""
//               }
//             >
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15"
//                   : ""
//               }
//             >
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/properties"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15"
//                   : ""
//               }
//             >
//               Properties
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/services"
//               className={({ isActive }) =>
//                 isActive
//                   ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15"
//                   : ""
//               }
//             >
//               Services
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <button onClick={toggleTheme}>Toggle</button>

//       <button className="flex justify-center">
//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             isActive
//               ? "2xl:py-4 2xl:px-6 py-3.5 px-5 bg-primary-60 rounded-xl md:flex  hidden  border border-gray-15 2xl:h-14.75  2xl:w-35 text-sm 2xl:text-lg justify-center"
//               : "2xl:py-4 2xl:px-4 py-3.5 px-5 bg-gray-08 rounded-xl md:flex  hidden  border border-gray-15 2xl:h-14.75 2xl:w-35 text-sm 2xl:text-lg justify-center"
//           }
//         >
//           Contact Us
//         </NavLink>
//       </button>
//       {Open == false && (
//         <button className="md:hidden flex" onClick={() => setOpen(!Open)}>
//           <img src="/assets/icons/bars.svg" alt="ImbBar" />
//         </button>
//       )}
//       {Open == true && (
//         <div className="flex flex-col gap-6.25 h-full w-full ">
//           <div className="flex justify-between p-5">
//             <img
//               src="/assets/images/logo/fullLogo.png"
//               alt="Logo"
//               className="2xl:w-40 2xl:h-15 md:w-28.25 md:h-8 w-23.25"
//             />
//             <button onClick={() => setOpen(!Open)}>
//               <img
//                 src="/assets/icons/cancel.svg"
//                 alt="cancel"
//                 className="w-6"
//               />
//             </button>
//           </div>
//           <div className="md:hidden gap-8.75 flex flex-col items-center">
//             <ul className=" gap-7.5 flex flex-col items-center">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5 py-2.5 px-5 rounded-lg  border border-gray-15"
//                       : ""
//                   }
//                   onClick={() => setOpen(!Open)}
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5  py-2.5 px-5 rounded-lg border border-gray-15"
//                       : ""
//                   }
//                   onClick={() => setOpen(!Open)}
//                 >
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/properties"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5  py-2.5 px-5 rounded-lg border border-gray-15"
//                       : ""
//                   }
//                   onClick={() => setOpen(!Open)}
//                 >
//                   Properties
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/services"
//                   className={({ isActive }) =>
//                     isActive
//                       ? "bg-gray-08 2xl:py-3.5 2xl:px-6 lg:py-3 lg:px-5  py-2.5 px-5 rounded-lg border border-gray-15"
//                       : ""
//                   }
//                   onClick={() => setOpen(!Open)}
//                 >
//                   Services
//                 </NavLink>
//               </li>
//             </ul>
//             <button>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive
//                     ? "bg-gray-08 px-3.75 rounded-xl py-2.5 h-fit border border-gray-15 "
//                     : "py-2.5 px-3.75 bg-gray-08 rounded-xl h-fit border border-gray-15"
//                 }
//                 onClick={() => setOpen(!Open)}
//               >
//                 Contact Us
//               </NavLink>
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [Open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme();

  return <div className="bg-gray-10 flex justify-around px-4 py-5 xl:text-[18px] md:text-[14px] items-center sticky w-full  top-0 h-fit z-50 ">
    {(Open == false) && <img src="/assets/images/logo/fullLogo.png" alt="Logo" className="2xl:w-4 2xl:h-15 md:w-28.25 md:h-8 w-23.25 h-7 bg-gray-10" />}
    <div>
      <ul className="sm:flex gap-7.5 hidden ">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5 rounded-lg border border-gray-15 " : ""}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15" : ""}>About Us</NavLink></li>
        <li><NavLink to="/properties" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15" : ""}>Properties</NavLink></li>
        <li><NavLink to="/services" className={({ isActive }) => isActive ? "bg-gray-08 2xl:py-3.5 2xl:px-6 py-3 px-5  rounded-lg border border-gray-15" : ""}>Services</NavLink></li>
      </ul>
    </div>

    <button onClick={toggleTheme} className="lg:text-3xl text-xl">{theme=="light"?"🌙":"☀️"}</button>
    <button ><NavLink to="/contact" className={({ isActive }) => isActive ? "2xl:py-4 2xl:px-6 py-3.5 px-5 bg-primary-60 rounded-xl sm:flex  hidden  border border-gray-15 2xl:h-14.75  2xl:w-35  " : "2xl:py-4 2xl:px-4 py-3.5 px-5 bg-gray-08 rounded-xl sm:flex  hidden  border border-gray-15 2xl:h-14.75 2xl:w-35"}>Contact Us</NavLink></button>
    {
      (Open == false) && <button className={` ${theme=="light"?"bg-black ":""}sm:hidden flex p-2 `} onClick={() => setOpen(!Open)}>
        <img src="/public/assets/icons/bars.svg" alt="ImgbBar" />
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