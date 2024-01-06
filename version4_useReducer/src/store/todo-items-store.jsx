import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoList: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
