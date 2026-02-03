import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../ui/DashboardHeader";
import Sidebar from "../ui/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden text-white bg-gray-08">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden relative">
        <DashboardHeader setIsOpen={setIsSidebarOpen} />

        <main className="flex-1 overflow-y-auto overflow-x-hidden font-urbanist p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
