// src/components/RecipeDetail.jsx
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipesData.find((r) => String(r.id) === String(id));

  if (!recipe) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <p className="text-red-600">Recipe not found.</p>
        <Link to="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700">
              {recipe.ingredients && recipe.ingredients.length ? (
                recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)
              ) : (
                <li>No ingredients listed.</li>
              )}
            </ul>
          </section>

          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Instructions</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              {recipe.instructions && recipe.instructions.length ? (
                recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
              ) : (
                <li>No instructions provided.</li>
              )}
            </ol>
          </section>

          <div className="flex items-center justify-between mt-6">
            <Link to="/" className="text-blue-500 underline">Back to Home</Link>
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Save Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}