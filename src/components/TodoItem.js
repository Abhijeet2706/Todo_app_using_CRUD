import React from "react";

const TodoItem = (props) => {
  return (
    <div className="todo-list">
      <li className={props.status ? "strike" : "item"}>{`${props.index + 1}. ${
        props.title
      }`}</li>

      <div className="btns">
        <button
          onClick={(e) => {
            e.preventDefault();
            props.completeCallback(props.index);
          }}
        >
          {props.status ? "Undo" : "Complete"}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.updateCb(props.index);
          }}
        >
          Update
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            props.deleteCallback(props.index);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
