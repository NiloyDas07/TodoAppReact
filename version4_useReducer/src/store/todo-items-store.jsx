import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext(
  {
    todoList: [],
    addNewItem: () => {},
    deleteItem: () => {},
  } // Just so that the values show up is vsCode autocomplete.
);

const todoListReducer = (currentTodoList, action) => {
  let newTodoList = currentTodoList;
  if (action.type === "NEW_ITEM") {
    const newId = currentTodoList.length
      ? currentTodoList[currentTodoList.length - 1].id + 1
      : 0;
    newTodoList = [
      ...currentTodoList,
      {
        id: newId,
        name: action.payload.newTodo,
        date: action.payload.newDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoList = currentTodoList.filter(
      (item) => item.id !== action.payload.id
    );
  }

  localStorage.setItem("todoArray", JSON.stringify(newTodoList));
  return newTodoList;
};

const TodoItemsContextProvider = ({ children }) => {
  const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

  const [todoList, dispatchTodoList] = useReducer(todoListReducer, todoArray);

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
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
