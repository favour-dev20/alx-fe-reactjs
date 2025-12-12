// src/_tests_/TodoList.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add");

  fireEvent.change(input, { target: { value: "New Todo" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Todo")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveClass("line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const deleteButton = screen.getAllByText("X")[0];
  fireEvent.click(deleteButton);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});