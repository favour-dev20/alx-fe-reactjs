// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  // Task 0 & 1 core
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => {
      const nextRecipes = [...state.recipes, newRecipe];
      // keep filteredRecipes in sync
      const nextFiltered = state.filteredRecipes && state.filteredRecipes.length
        ? [...state.filteredRecipes, newRecipe]
        : nextRecipes.slice();
      set({ filteredRecipes: nextFiltered });
      return { recipes: nextRecipes };
    }),
  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes.slice() });
  },
  updateRecipe: (id, updatedData) =>
    set((state) => {
      const updated = state.recipes.map((r) => (r.id === id ? { ...r, ...updatedData } : r));
      return { recipes: updated, filteredRecipes: updated.slice() };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const remaining = state.recipes.filter((r) => r.id !== id);
      return { recipes: remaining, filteredRecipes: remaining.slice() };
    }),

  // Task 2: search & filter
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(term);
  },

  filteredRecipes: [],
  filterRecipes: (term = "") => {
    const search = (term || get().searchTerm || "").toString().trim().toLowerCase();
    const all = get().recipes || [];
    if (!search) {
      set({ filteredRecipes: all.slice() });
      return;
    }
    const filtered = all.filter((recipe) => {
      if (!recipe) return false;
      if (recipe.title && recipe.title.toLowerCase().includes(search)) return true;
      if (Array.isArray(recipe.ingredients) && recipe.ingredients.join(" ").toLowerCase().includes(search)) return true;
      if (recipe.prepTime && recipe.prepTime.toString().toLowerCase().includes(search)) return true;
      if (recipe.description && recipe.description.toLowerCase().includes(search)) return true;
      return false;
    });
    set({ filteredRecipes: filtered });
  },

  // helper to initialize filteredRecipes on mount
  initFilter: () => {
    const all = get().recipes || [];
    set({ filteredRecipes: all.slice() });
  },
}));

export default useRecipeStore;
