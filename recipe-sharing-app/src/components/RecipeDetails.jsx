import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { id } = useParams()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  )
  const navigate = useNavigate()

  if (!recipe) return <p>Recipe not found!</p>

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <Link to={`/edit/${recipe.id}`} style={{ marginRight: '8px' }}>
        Edit
      </Link>
      <DeleteRecipeButton
        recipeId={recipe.id}
        onDelete={() => navigate('/')}
      />
    </div>
  )
}

export default RecipeDetails