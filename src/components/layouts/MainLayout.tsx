import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AnnouncementBar from "../ui/AnnouncementBar";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import Loader from "../ui/Loader";

const MainLayout = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500); // ⏱️ ثانيتين

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-08 text-white">
      <AnnouncementBar />
      <Navbar />

      <div className="flex-1 flex flex-col justify-center items-center">
        {showLoader ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
