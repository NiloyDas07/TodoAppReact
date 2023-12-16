import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMsg = () => {
  const todoContextObj = useContext(TodoItemsContext);
  if (!todoContextObj.todoList.length) {
    return <h3>All Tasks Done! Enjoy Your Day. 😊</h3>;
  }
};

export default WelcomeMsg;
