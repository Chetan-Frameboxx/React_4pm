import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}