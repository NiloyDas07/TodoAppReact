import { createContext } from "react";

export const TodoItemsContext = createContext(
  {
    todoList: [],
    addNewItem: () => {},
    deleteItem: () => {},
  } // Just so that the values show up is vsCode autocomplete.
);
