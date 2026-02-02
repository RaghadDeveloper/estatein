import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "../ui/AnnouncementBar";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import ScrollBtn from "../ui/ScrollBtn";
import Loader from "../ui/Loader";

const MainLayout = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-urbanist bg-gray-08 text-white min-h-screen">
      <AnnouncementBar />
      <Navbar />

      {showLoader && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollBtn />
    </div>
  );
};

export default MainLayout;
