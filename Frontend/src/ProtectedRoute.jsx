import React from "react";
import { Navigate } from "react-router";
import {jwtDecode} from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // If no token → redirect
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Validate token expiry
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // convert ms → seconds

    if (decoded.exp < currentTime) {
      // Token expired → remove it
      localStorage.removeItem("token");
      return <Navigate to="/login" replace />;
    }
  } catch (error) {
    // If token is invalid/corrupted
    localStorage.removeItem("token");
    return <Navigate to="/login" replace />;
  }

  // Token valid → allow access
  return children;
};

export default ProtectedRoute;
