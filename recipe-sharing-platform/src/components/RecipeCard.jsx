export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
      <img src={recipe.image} alt={recipe.title} className="rounded-t-lg w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
      <p className="text-gray-600">{recipe.summary}</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        View Recipe
      </button>
    </div>
  );
}