import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const DashboardHeader = () => {
  const style =
    "text-3xl text-gray-70 hover:text-primary-65 cursor-pointer my-2 mx-4";

  return (
    <div className="bg-bg-secondary border-l-2 border-l-gray-10 light:border-l-light-90 px-3 py-3.5 shadow-2xl flex justify-end items-center">
      <ThemeToggle />
      <FaBell className={style} />
      <HiOutlineLogout className={style} />
      <FaUserCircle className={style} />
    </div>
  );
};

export default DashboardHeader;
