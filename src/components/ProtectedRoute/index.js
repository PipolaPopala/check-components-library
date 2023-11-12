
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute ({ redirectPath = "/checkAuth"}) {
  const { user } = true
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />
};

export default ProtectedRoute