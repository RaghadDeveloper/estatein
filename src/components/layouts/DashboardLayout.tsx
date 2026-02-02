import { Outlet } from "react-router-dom";
import DashboardHeader from "../ui/DashboardHeader";
import Sidebar from "../ui/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen text-white">
      <DashboardHeader />
      <Sidebar />
      <main className="font-urbanist bg-gray-08">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
