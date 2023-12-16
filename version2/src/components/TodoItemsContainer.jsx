import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

import styles from "./TodoItemsContainer.module.css";

function TodoItemsContainer({ list, onNewItem, onDelete }) {
  return (
    <div className={`${styles["item-container"]} container`}>
      <AddTodo onNewItem={onNewItem}></AddTodo>
      {list.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          todo={item.name}
          date={item.date}
          onDelete={onDelete}
        ></TodoItem>
      ))}
    </div>
  );
}

export default TodoItemsContainer;
