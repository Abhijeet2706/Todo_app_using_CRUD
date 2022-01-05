import React, { useState } from "react";

export default function TodoInput(props) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value !== "") {
      props.createTodoItem(value);
      setValue("");
    } else {
    }
  }
  return (
    <div className="create-todo-task">
      {/* Your To-Do List For Today Is :- &#9203; */}
      <form className="todo-form">
        <input
          type="text"
          className="task-input"
          placeholder="Add Task..."
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button className="add-task-btn" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
}
