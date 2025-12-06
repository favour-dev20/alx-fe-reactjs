// src/components/HomePage.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // navigation
import RecipeCard from "./RecipeCard";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Recipe Sharing Platform
      </h1>

      {/* Link to Add Recipe Form */}
      <div className="mb-6 text-center">
        <Link
          to="/add-recipe"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Grid wrapper (responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={/recipe/${recipe.id}}
            className="block rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-0.5"
          >
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </main>
  );
}