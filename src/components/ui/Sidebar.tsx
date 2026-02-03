import {
  FaBell,
  FaBuilding,
  FaCog,
  FaQuestionCircle,
  FaTachometerAlt,
  FaUserCircle,
  FaUsers,
} from "react-icons/fa";
import DashLink from "./DashLink";
import type { SidebarProps } from "../../interfaces";



const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const links = [
    { icon: FaTachometerAlt, label: "Dashboard" },
    { icon: FaBuilding, to: "/dashboard/properties", label: "Properties" },
    { icon: FaUsers, label: "Team" },
    { icon: FaUserCircle, label: "Profile" },
    { icon: FaCog, label: "Settings" },
    { icon: FaBell, label: "Notifications" },
    { icon: FaQuestionCircle, label: "Help" },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50
        w-72 bg-gray-15 shadow-2xl lg:shadow-md px-5 py-10 
        flex flex-col items-center transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <button
          className="lg:hidden absolute top-5 right-5 transition-transform active:scale-90"
          onClick={() => setIsOpen(false)}
        >
          <img 
            src="/assets/icons/cancel.svg" 
            alt="Close menu" 
            className="w-3 h-3 object-contain"
          />
        </button>

        <img
          src="/assets/images/logo/fullLogo.png"
          alt="Logo"
          className="mb-16 w-3/4"
        />

        <nav className="w-full flex flex-col gap-1">
          {links.map((link) => (
            <div key={link.label} onClick={() => setIsOpen(false)}>
              <DashLink link={link} />
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;