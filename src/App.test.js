import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Header from "./Header";

// * Jest Test Area

test("renders App component", () => {
  render(<App />);
});

test("renders App component header and Todo elements", () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Task Tracker/i);
  const todoElement = getByText(/test my app with Jest/i);
  expect(headerElement).toBeInTheDocument();
  expect(todoElement).toBeInTheDocument();
});

test("ToDo", () => {
  const { getByText } = render(<App />);
  getByText(/test my app with Jest/i);
});

test("fireEvent - add items to list", () => {
  const { getByText } = render(<App />);
  getByText(/learn to code/i);
});

// * Header Jest Test to check the title attribute
test("Header component title", () => {
  const title = "Task Tracker";
  const { getByText } = render(<Header title={title} />);
  const headerElement = getByText(title);
  expect(headerElement).toBeInTheDocument();
});

//? fireEvent examples:
test("fireEvent - add pizza to list", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText("Add Task...");

  fireEvent.change(input, { target: { value: "order pizza" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

  getByText("order pizza");
});

test("fireEvent - add groceries to the list", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText("Add Task...");

  fireEvent.change(input, { target: { value: "buy groceries" } });
  fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

  waitFor(() => {
    expect(getByText("buy groceries")).toBeInTheDocument();
  });
});

//? userEvent example
test("user-events allows users to add tasks", () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText("Add Task...");

  userEvent.type(input, "learn spanish");
  userEvent.type(input, "{enter}");

  expect(getByText("learn spanish")).toBeInTheDocument();
});



//? mock todo example
test("renders sample todos list correctly", () => {
  const mockTodos = [
    { text: "order pizza", isCompleted: false },
    { text: "test my app with Jest", isCompleted: false },
    { text: "learn to code", isCompleted: false },
  ];

  const { getByText } = render(<App />, {
    wrapper: ({ children }) => (
      <mockTodo value={mockTodos}>{children}</mockTodo>
    ),
  });

  mockTodos.forEach((todo) => {
    const todoElement = getByText(todo.text);
    expect(todoElement).toBeInTheDocument();
  });
});
