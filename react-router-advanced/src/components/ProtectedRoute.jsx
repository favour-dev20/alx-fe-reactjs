import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // ALX wants this import

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // must actually call the hook

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}