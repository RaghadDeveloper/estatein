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
import Logo from "../icons/Logo";

const Sidebar = () => {
  const links = [
    { icon: FaTachometerAlt, label: "Dashboard" },
    { icon: FaBuilding, to: "/dashboard/properties", label: "properties" },
    { icon: FaUsers, label: "Team" },
    { icon: FaUserCircle, label: "Profile" },
    { icon: FaCog, label: "Settings" },
    { icon: FaBell, label: "Notifications" },
    { icon: FaQuestionCircle, label: "Help" },
  ];
  return (
    <div className="row-span-full bg-bg-secondary shadow-md px-5 py-10 flex flex-col items-center">
      <span className="mb-16">
        <Logo />
      </span>

      {links.map((link) => (
        <DashLink key={link.label} link={link} />
      ))}
    </div>
  );
};

export default Sidebar;
