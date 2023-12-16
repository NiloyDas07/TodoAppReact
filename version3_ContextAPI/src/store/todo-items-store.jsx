import { createContext } from "react";

const todoArray = JSON.parse(localStorage.getItem("todoArray")) || [];

export const TodoItemsContext = createContext();
