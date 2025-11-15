import React from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  return (
    <div style={{ maxWidth: 600, margin: '24px auto', padding: '0 16px' }}>
      <h1 style={{ textAlign: 'center' }}>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default App