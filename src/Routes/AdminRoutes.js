import { React, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAdmin } from "../Components/Hooks/useAdmin";
import { authContext } from "../Context/UserContext";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);
  // console.log(user)
  const [admin, adminLoading] = useAdmin(user?.email);
  // console.log(admin)

  if (loading || adminLoading) {
    return (
      <div className="flex w-full justify-center h-24 ">
        <div className="w-16 h-16 text-center border-4 border-dashed rounded-full border-red-900 animate-spin dark:border-red-900"></div>
      </div>
    );
  }

  if (admin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
