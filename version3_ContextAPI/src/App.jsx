import AppName from "./components/AppName";
import TodoItemsContainer from "./components/TodoItemsContainer";
import WelcomeMsg from "./components/WelcomeMsg";

import { useEffect, useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

  const [todoList, setTodoList] = useState(todoArray);

  useEffect(
    () => localStorage.setItem("todoArray", JSON.stringify(todoList)),
    [todoList]
  );

  const addNewItem = (newTodo, newDate) => {
    setTodoList((current /*By default the latest todoList*/) => {
      const newId = current.length ? current[current.length - 1].id + 1 : 0;
      return [...current, { id: newId, name: newTodo, date: newDate }];
    });
  }; // Using functional updates to avoid stale/old values during asynchronous uptades.

  const deleteItem = (id) => {
    setTodoList((current) => current.filter((item) => item.id !== id));
  };

  return (
    <TodoItemsContext.Provider value={{ todoList, addNewItem, deleteItem }}>
      {/*Shorthand for: todoList: todoList, addNewItem: addNewItem, deleteItem: deleteItem*/}
      <center className="todo-container">
        <AppName></AppName>
        <TodoItemsContainer></TodoItemsContainer>
        <WelcomeMsg></WelcomeMsg>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
