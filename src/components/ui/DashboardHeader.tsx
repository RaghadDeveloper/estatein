import { FaBell, FaUserCircle } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";

const DashboardHeader = ({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) => {
  const iconStyle =
    "text-xl md:text-2xl text-gray-400 hover:text-primary-600 cursor-pointer ml-4 md:ml-6 transition-colors";

  return (
    <div className="bg-gray-15 border-b border-gray-10 px-4 py-4 shadow-md flex justify-between items-center z-20">
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-center transition-opacity hover:opacity-80 active:scale-90"
      >
        <img 
          src="/assets/icons/bars.svg" 
          alt="Menu" 
          className="w-5 h-5 object-contain" 
        />
      </button>

      <div className="flex items-center ml-auto">
        <GoSun className={iconStyle} />
        <FaBell className={iconStyle} />
        <HiOutlineLogout className={iconStyle} />
        <FaUserCircle className={iconStyle} />
      </div>
    </div>
  );
};

export default DashboardHeader;