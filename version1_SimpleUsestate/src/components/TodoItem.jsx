import styles from "./TodoItem.module.css";

function TodoItem({ id, todo, date, onDelete }) {
  const handleDeleteClicked = () => {
    onDelete(id);
  };

  return (
    <div className={`row ${styles["my-row"]}`}>
      <div className="col-6">{todo}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleDeleteClicked}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
