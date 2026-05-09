// ================= ProtectedRoute.js =================

import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const token = localStorage.getItem("token");

  // if no token -> go to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // if token exists -> show dashboard
  return children;
};

export default ProtectedRoute;