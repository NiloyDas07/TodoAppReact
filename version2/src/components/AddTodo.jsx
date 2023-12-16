import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleOnKeyUpInput = (e) => {
    setText(e.target.value);
  };

  const handleOnChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleAddButtonClicked = (e) => {
    e.preventDefault();

    function formatDate(date) {
      let dateArray = date.split("-");
      dateArray.reverse();
      return dateArray.join("/");
    }
    onNewItem(text, formatDate(date));
    setText("");
    setDate("");
  };

  return (
    <form
      className={`row ${styles["my-row"]}`}
      onSubmit={handleAddButtonClicked}
    >
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          className="newTodo"
          onChange={handleOnKeyUpInput}
          value={text}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          className="newTodoDate"
          onChange={handleOnChangeDate}
          value={date}
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
