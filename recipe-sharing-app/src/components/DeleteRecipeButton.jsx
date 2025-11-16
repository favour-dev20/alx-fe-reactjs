import React from "react";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: "8px", color: "red" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;