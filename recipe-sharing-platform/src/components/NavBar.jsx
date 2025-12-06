export default function NavBar(){
  return (
    <nav className="w-full p-4 bg-white border-b">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold">RecipeShare</div>
        <button className="px-3 py-1 rounded-md hover:bg-gray-100">Add Recipe</button>
      </div>
    </nav>
  )
}