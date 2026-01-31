import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";

const MainLayout = lazy(() => import("../components/layouts/MainLayout"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Properties = lazy(() => import("../pages/Properties"));
const PropertyDetails = lazy(() => import("../pages/PropertyDetails"));
const Services = lazy(() => import("../pages/Services"));
const Contact = lazy(() => import("../pages/Contact"));
const DashboardLayout = lazy(() => import("../components/layouts/DashboardLayout"));
const PropertiesList = lazy(() => import("../pages/PropertiesList"));
const AddProperty = lazy(() => import("../pages/AddProperty"));
const EditProperty = lazy(() => import("../pages/EditProperty"));

export const routes = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/properties", element: <Properties /> },
      { path: "/properties/:id", element: <PropertyDetails /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="properties" /> },
      { path: "properties", element: <PropertiesList /> },
      { path: "properties/add", element: <AddProperty /> },
      { path: "properties/edit/:id", element: <EditProperty /> },
    ],
  },
]);
