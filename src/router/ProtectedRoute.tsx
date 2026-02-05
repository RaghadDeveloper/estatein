import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { JSX } from "react";
import Loader from "../components/ui/Loader";
import type { RootState } from "../redux/store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useSelector((state: RootState) => state.user);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
