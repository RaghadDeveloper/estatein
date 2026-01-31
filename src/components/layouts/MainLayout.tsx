import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "../ui/AnnouncementBar";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import ScrollBtn from "../ui/ScrollBtn";



const MainLayout = () => {
  return (
    <div className="font-urbanist bg-gray-08  text-light-99">
      <AnnouncementBar />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollBtn />
    </div>
  );
};

export default MainLayout;



