import AppName from "./components/AppName";
import TodoItemsContainer from "./components/TodoItemsContainer";
import WelcomeMsg from "./components/WelcomeMsg";

import { useEffect, useState } from "react";

function App() {
  const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

  const [todoList, setTodoList] = useState(todoArray);

  useEffect(
    () => localStorage.setItem("todoArray", JSON.stringify(todoList)),
    [todoList]
  );

  const handleNewItem = (newTodo, newDate) => {
    setTodoList((current /*By default the latest todoList*/) => {
      const newId = current.length
        ? current[current.length - 1].id + 1
        : 0;
      return [...current, { id: newId, name: newTodo, date: newDate }];
    });
  }; // Using functional updates to avoid stale/old values during asynchronous uptades.

  const handleDeleteItem = (id) => {
    setTodoList((current) => current.filter((item) => item.id !== id));
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <TodoItemsContainer
        list={todoList}
        onNewItem={handleNewItem}
        onDelete={handleDeleteItem}
      ></TodoItemsContainer>
      {!todoList.length && <WelcomeMsg></WelcomeMsg>}
    </center>
  );
}

export default App;
