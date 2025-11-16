import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetail from "./components/RecipeDetail"; // make sure the filename matches
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
  return (
    <div style={{ maxWidth: 600, margin: "24px auto", padding: "0 16px" }}>
      <h1 style={{ textAlign: "center" }}>Recipe Sharing App</h1>
      <AddRecipeForm />
      <Router>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;