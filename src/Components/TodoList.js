import React from "react";

const TodoList = ({
  todos,
  setTodos,
  data,
  setData,
  show,
  setShow,
  editIndex,
  setEditIndex,
}) => {
  const handleEdit = (i, text) => {
    setShow(true);
    setData(text);
    setEditIndex(i);
  };

  const handleDelete = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  const handleChecked = (index) => {
    const checkedTodo = [...todos];
    checkedTodo[index].completed = !checkedTodo[index].completed;
    setTodos(checkedTodo);
  };
  const clearAll = () => {
    setTodos([]);
  };
  return (
    <div>
      {todos.length > 0 ? <div>{todos.map((t, i) => (
        <li key={i} className="list-item">
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => handleChecked(i)}
          />
          <span className={`list ${t.completed ? "complete" : ""}`}>
            {t.text}
          </span>

          <div>
            <button
              type="button"
              className="button-edit task-button"
              onClick={() => handleEdit(i, t.text)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              type="button"
              onClick={() => handleDelete(i)}
              className="button-delete task-button"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
      <button className="btn btn-danger my-3" onClick={clearAll}>
        Clear All
      </button></div>:<div className="text-center m-3">No todos present</div>}
      {/* {todos.map((t, i) => (
        <li key={i} className="list-item">
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => handleChecked(i)}
          />
          <span className={`list ${t.completed ? "complete" : ""}`}>
            {t.text}
          </span>

          <div>
            <button
              type="button"
              className="button-edit task-button"
              onClick={() => handleEdit(i, t.text)}
            >
              <i className="fa fa-edit"></i>
            </button>
            <button
              type="button"
              onClick={() => handleDelete(i)}
              className="button-delete task-button"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
      <button className="btn btn-danger my-3" onClick={clearAll}>
        Clear All
      </button> */}
    </div>
  );
};

export default TodoList;
