// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="flex items-center justify-center py-6 bg-white border-b">
          <h1 className="text-3xl font-bold text-blue-600">
            Recipe Sharing Platform — Tailwind OK ✅
          </h1>
        </header>

        <main className="py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}