import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  // Test 1: Initial Render
  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);

    // Check if the title is rendered
    expect(screen.getByText('My Todo List')).toBeInTheDocument();

    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Master React Testing')).toBeInTheDocument();
  });

  // Test 2: Adding a Todo
  test('allows users to add a new todo', () => {
    render(<TodoList />);

    // Find the input and button
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Type a new todo
    fireEvent.change(input, { target: { value: 'New Todo Item' } });

    // Click the add button
    fireEvent.click(addButton);

    // Check if the new todo appears
    expect(screen.getByText('New Todo Item')).toBeInTheDocument();
  });

  // Test 3: Adding Empty Todo (Should Not Add)
  test('does not add empty todos', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Get initial todo count
    const initialTodos = screen.getAllByRole('listitem');
    const initialCount = initialTodos.length;

    // Try to add empty todo
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);

    // Check that no new todo was added
    const finalTodos = screen.getAllByRole('listitem');
    expect(finalTodos.length).toBe(initialCount);
  });

  // Test 4: Toggling Todo Completion
  test('toggles todo completion status when clicked', () => {
    render(<TodoList />);

    // Find a todo item
    const todoText = screen.getByText('Learn React');

    // Initially, it should not have line-through
    expect(todoText).toHaveStyle('text-decoration: none');

    // Click to toggle
    fireEvent.click(todoText);

    // Now it should have line-through
    expect(todoText).toHaveStyle('text-decoration: line-through');

    // Click again to toggle back
    fireEvent.click(todoText);

    // Should be back to normal
    expect(todoText).toHaveStyle('text-decoration: none');
  });

  // Test 5: Deleting a Todo
  test('deletes a todo when delete button is clicked', () => {
    render(<TodoList />);

    // Check that the todo exists
    expect(screen.getByText('Learn React')).toBeInTheDocument();

    // Find all delete buttons
    const deleteButtons = screen.getAllByText('Delete');

    // Click the first delete button
    fireEvent.click(deleteButtons[0]);

    // Check that the todo is removed
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  // Test 6: Multiple Operations
  test('handles multiple operations correctly', () => {
    render(<TodoList />);

    // Add a new todo
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    // Verify it was added
    expect(screen.getByText('Test Todo')).toBeInTheDocument();

    // Toggle it
    const testTodo = screen.getByText('Test Todo');
    fireEvent.click(testTodo);
    expect(testTodo).toHaveStyle('text-decoration: line-through');

    // Delete it
    const deleteButtons = screen.getAllByText('Delete');
    const testTodoDeleteButton = deleteButtons.find(
      button => button.parentElement.textContent.includes('Test Todo')
    );
    fireEvent.click(testTodoDeleteButton);

    // Verify it was deleted
    expect(screen.queryByText('Test Todo')).not.toBeInTheDocument();
  });

  // Test 7: Input Clears After Adding Todo
  test('clears input field after adding a todo', () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    // Type and add a todo
    fireEvent.change(input, { target: { value: 'Clear Input Test' } });
    fireEvent.click(addButton);

    // Input should be empty
    expect(input.value).toBe('');
  });

  // Test 8: Empty State Display
  test('displays empty state when all todos are deleted', () => {
    render(<TodoList />);

    // Delete all todos
    const deleteButtons = screen.getAllByText('Delete');
    deleteButtons.forEach(button => fireEvent.click(button));

    // Check for empty state message
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });
});