import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  if (!recipes.length) return <p>No recipes yet — add one!</p>

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: '1px solid #ccc', padding: '8px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} style={{ marginRight: '8px' }}>
            View
          </Link>
          <Link to={`/edit/${recipe.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  )
}

export default RecipeList