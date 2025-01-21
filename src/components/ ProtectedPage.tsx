import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../lib/store";

const ProtectedPage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const isAuth = useSelector((state: RootState) => state.auth.isAuthencated);
  if (!isAuth)
    return <Navigate to={"/signin"} state={{ from: location }} replace />;
  return children;
};

export default ProtectedPage;
