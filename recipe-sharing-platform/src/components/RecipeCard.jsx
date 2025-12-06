// src/components/RecipeCard.jsx
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 flex-1">{recipe.summary}</p>
        <div className="mt-4">
          <Link
            to={`/recipe/${recipe.id}`}
            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </article>
  );
}