import { useRef, useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const textRef = useRef();
  const dateRef = useRef();

  const handleAddButtonClicked = (e) => {
    e.preventDefault();

    function formatDate(date) {
      let dateArray = date.split("-");
      dateArray.reverse();
      return dateArray.join("/");
    }

    const text = textRef.current.value;
    const date = formatDate(dateRef.current.value);

    onNewItem(text, date);

    textRef.current.value = dateRef.current.value = '';
  };

  return (
    <form
      className={`row ${styles["my-row"]}`}
      onSubmit={handleAddButtonClicked}
    >
      <div className="col-6">
        <input
          type="text"
          ref={textRef}
          placeholder="Enter Todo Here"
          className="newTodo"
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          ref={dateRef}
          className="newTodoDate"
        />
      </div>
      <div className="col-2">
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddTodo;
