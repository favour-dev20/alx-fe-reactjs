import { useState } from "react";

// Simple hook to simulate authentication
export default function useAuth() {
  const [isAuthenticated] = useState(false); // set true if logged in
  return { isAuthenticated };
}