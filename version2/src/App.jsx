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
    const newId = todoList.length ? todoList[todoList.length - 1].id + 1 : 0;
    setTodoList([...todoList, { id: newId, name: newTodo, date: newDate }]);
  };

  const handleDeleteItem = (id) => {
    const newList = todoList.filter((item) => item.id !== id);
    setTodoList(newList);
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
