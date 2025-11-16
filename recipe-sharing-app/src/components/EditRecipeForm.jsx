import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

const EditRecipeForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(id))
  )
  const updateRecipe = useRecipeStore((state) => state.updateRecipe)

  const [title, setTitle] = useState(recipe?.title || '')
  const [description, setDescription] = useState(recipe?.description || '')

  const handleSubmit = (event) => {
    event.preventDefault()
    updateRecipe(recipe.id, { title, description })
    navigate(`/recipe/${recipe.id}`)
  }

  if (!recipe) return <p>Recipe not found!</p>

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default EditRecipeForm