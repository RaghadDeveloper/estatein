import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../ui/DashboardHeader";
import Sidebar from "../ui/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden text-text-main bg-bg-main">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-hidden relative">
        <DashboardHeader setIsOpen={setIsSidebarOpen} />

        <main className="flex-1 px-4 md:px-20 2xl:px-40.5 py-5 lg:py-10 2xl:py-12.5 overflow-y-auto overflow-x-hidden font-urbanist p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
