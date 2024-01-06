import AppName from "./components/AppName";
import TodoItemsContainer from "./components/TodoItemsContainer";
import WelcomeMsg from "./components/WelcomeMsg";

import { useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

//useReducer is a pure function. Pure fuctions only deal with their own arguments. They don't touch anything outside the function.

// A reducer functions takes current state and an action object and returns the new state.
const todoListReducer = (currentTodoList, action) => {
  let newTodoList = currentTodoList;
  if (action.type === "NEW_ITEM") {
    const newId = currentTodoList.length
      ? currentTodoList[currentTodoList.length - 1].id + 1
      : 0;
    newTodoList = [
      ...currentTodoList,
      { id: newId, name: action.payload.newTodo, date: action.payload.newDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoList = currentTodoList.filter(
      (item) => item.id !== action.payload.id
    );
  }

  localStorage.setItem("todoArray", JSON.stringify(newTodoList));
  return newTodoList;
};

function App() {
  const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

  const [todoList, dispatchTodoList] = useReducer(todoListReducer, todoArray);

  // useEffect(
  //   () => localStorage.setItem("todoArray", JSON.stringify(todoList)),
  //   [todoList]
  // );

  const addNewItem = (newTodo, newDate) => {
    const addNewItemAction = {
      type: "NEW_ITEM",
      payload: {
        newTodo,
        newDate,
      },
    };
    dispatchTodoList(addNewItemAction);
  };

  const deleteItem = (id) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id,
      },
    };
    dispatchTodoList(deleteItemAction);
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
