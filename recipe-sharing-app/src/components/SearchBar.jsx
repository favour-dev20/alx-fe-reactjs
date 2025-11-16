import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      style={{ width: "100%", padding: "8px", marginBottom: "16px" }}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
