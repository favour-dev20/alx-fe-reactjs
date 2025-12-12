import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}