// src/App.jsx
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <header className="w-full max-w-md mb-6 bg-white shadow rounded p-4 text-center">
        <h1 className="text-3xl font-bold text-blue-600">
          React Todo App — Tailwind OK ✅
        </h1>
      </header>

      <main className="w-full max-w-md">
        <TodoList />
      </main>
    </div>
  );
}