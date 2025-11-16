import React from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );
  return (
    <div>
      <h2>Recommend Recipes</h2>

      <button onClick={generateRecommendations}>Generate Recommendation</button>

      <ul>
        {recommendations.length === 0 && <p>No recommendations yet.</p>}

        {recommendations.map((recipe) => (
          <li Key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;
