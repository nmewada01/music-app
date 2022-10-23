import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  if (!auth) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  return children;
};

export default ReqAuth;
