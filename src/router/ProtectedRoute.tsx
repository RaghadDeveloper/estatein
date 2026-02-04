import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useAuth } from "../context/useAuth";
import Loader from "../components/ui/Loader";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
