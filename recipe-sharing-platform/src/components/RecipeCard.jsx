export default function RecipeCard({recipe}) {
  return (
    <article className="p-4 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold">{recipe.title}</h3>
      <p className="text-sm text-gray-600">{recipe.desc}</p>
      <button className="mt-3 inline-block text-sm underline">View</button>
    </article>
  )
}