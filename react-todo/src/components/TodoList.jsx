// src/components/TodoList.jsx
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodoForm addTodo={addTodo} />
      <ul className="mt-4 space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`p-2 border rounded cursor-pointer ${
              todo.completed ? "line-through bg-green-100" : "bg-white"
            }`}
          >
            {todo.text}
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
              className="ml-2 text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}