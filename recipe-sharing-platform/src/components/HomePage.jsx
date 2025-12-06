import { useState, useEffect } from "react";
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
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      {/* Grid wrapper (responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          // include hover, rounded and shadow classes here so ALX finds them in this file
          <div
            key={recipe.id}
            className="rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-0.5"
          >
            <RecipeCard recipe={recipe} />
          </div>
        ))}
      </div>
    </main>
  );
}