import { FaBell, FaUserCircle } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

const DashboardHeader = ({
  setIsOpen,
}: {
  setIsOpen: (val: boolean) => void;
}) => {
  const iconStyle =
    "text-3xl text-text-main hover:text-primary-65 cursor-pointer my-2 mx-4";
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate("/login");
    } catch (error) {
      alert("Logout failed:" + error);
    }
  };

  return (
    <div className="bg-bg-secondary p-4 shadow-md flex justify-between items-center z-20">
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex items-center justify-center transition-opacity hover:opacity-80 active:scale-90"
      >
        <FiMenu size={28} />
      </button>

      <div className="flex items-center ml-auto">
        <ThemeToggle />
        <FaBell className={iconStyle} />
        <HiOutlineLogout className={iconStyle} onClick={handleLogout} />
        <FaUserCircle className={iconStyle} />
      </div>
    </div>
  );
};

export default DashboardHeader;
