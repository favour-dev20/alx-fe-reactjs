// src/components/RecipeList.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const initFilter = useRecipeStore((state) => state.initFilter);

  // initialize filteredRecipes on mount
  useEffect(() => {
    initFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // re-filter whenever recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const listToRender = (filteredRecipes && filteredRecipes.length) ? filteredRecipes : recipes;

  if (!listToRender || listToRender.length === 0) {
    return <p>No recipes yet — add one!</p>;
  }

  return (
    <div>
      {listToRender.map((recipe) => (
        <div key={recipe.id} style={{ borderBottom: "1px solid #ccc", padding: "8px 0" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <Link to={/recipe/${recipe.id}} style={{ marginRight: "8px" }}>
            View
          </Link>

          <Link to={/edit/${recipe.id}}>
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
