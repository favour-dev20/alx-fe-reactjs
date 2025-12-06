import RecipeCard from "../components/RecipeCard"

export default function Home(){
  const sample = [{id:1, title:"Jollof Rice", desc:"Spicy and yummy"}]
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Latest Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sample.map(r => <RecipeCard key={r.id} recipe={r} />)}
      </div>
    </div>
  )
}