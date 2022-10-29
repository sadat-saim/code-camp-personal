import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[80vh] grid place-content-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    );
  }
  if (!user)
    return (
      <Navigate
        to="/signin"
        state={{ from: location }}
        replace={true}
      ></Navigate>
    );
  return children;
};

export default PrivateRoute;
