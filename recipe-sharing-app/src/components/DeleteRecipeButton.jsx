import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // ✅ ensure useNavigate is used

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // navigate back to RecipeList after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
}

export default DeleteRecipeButton;