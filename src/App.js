import React from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Header from "./Header";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "order pizza",
      isCompleted: false,
    },
    {
      text: "test my app with Jest",
      isCompleted: false,
    },
    {
      text: "learn to code",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="App">
      <Header title="Task Tracker" />
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo
            className="removeTodo"
            key={i}
            index={i}
            todo={todo}
            remove={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
