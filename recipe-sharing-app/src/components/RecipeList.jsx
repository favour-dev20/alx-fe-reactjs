import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // Show filteredRecipes if not empty, else show all recipes
  const listToRender = filteredRecipes.length ? filteredRecipes : recipes;

  if (!listToRender.length) return <p>No recipes yet — add one!</p>;

  return (
    <div>
      {listToRender.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: "1px solid #ddd", padding: "8px", margin: "8px 0" }}
        >
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;