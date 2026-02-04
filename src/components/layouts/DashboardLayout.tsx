import { Outlet } from "react-router-dom";
import DashboardHeader from "../ui/DashboardHeader";
import Sidebar from "../ui/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[20rem_1fr] grid-rows-[auto_1fr] h-screen text-text-main relative">
      <DashboardHeader />
      <Sidebar />
      <main className="font-urbanist bg-bg-main px-4 md:px-20 2xl:px-40.5 py-5 lg:py-10 2xl:py-12.5 overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
