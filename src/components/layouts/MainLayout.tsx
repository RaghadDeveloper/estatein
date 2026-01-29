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
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-urbanist bg-gray-08 text-white min-h-screen flex flex-col relative">
      <AnnouncementBar />
      <Navbar />

      {/* هذا هو المفتاح */}
      <main className="flex-1">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />

      {showLoader && <Loader />}
    </div>
  );
};

export default MainLayout;
