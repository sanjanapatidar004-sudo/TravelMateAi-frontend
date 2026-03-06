import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children, roleRequired }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (roleRequired && user?.role !== roleRequired) {
    return <Navigate to="/trips" />;
  }

  return children;
}