import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import styles from "./TodoItemsContainer.module.css";

function TodoItemsContainer() {
  const { todoList } = useContext(TodoItemsContext); //Object Destructuring for useContext(TodoItemsContext).todoList.
  return (
    <div className={`${styles["item-container"]} container`}>
      <AddTodo></AddTodo>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todo={item.name}
          date={item.date}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItemsContainer;
