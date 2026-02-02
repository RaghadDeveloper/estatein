import { FaBell, FaUserCircle } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";

const DashboardHeader = () => {
  const style =
    "text-2xl text-gray-70 hover:text-primary-65 cursor-pointer ml-6";

  return (
    <div className="bg-gray-15 border-l-2 border-l-gray-10 px-3 py-3.5 shadow-md flex justify-end">
      <GoSun className={style} />
      <FaBell className={style} />
      <HiOutlineLogout className={style} />
      <FaUserCircle className={style} />
    </div>
  );
};

export default DashboardHeader;
