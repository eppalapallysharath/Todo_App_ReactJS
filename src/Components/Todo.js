import React, { useEffect } from "react";
// import deleteicon from "../Icons/trash.svg";
// import checkicon from "../Icons/check2-circle.svg";
// import editicon from "../Icons/pencil-square.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({
  data,
  setData,
  todos,
  setTodos,
  show,
  setShow,
  editIndex,
  setEditIndex,
}) => {
  const HandleAdd = (e) => {
    e.preventDefault();
    const todo = data;
    if (todo === "") {
      // setError("Please write Something")
      alert("write something can't be empty");
    } else {
      setTodos([...todos, { text: todo, completed: false }]);
      setData("");
    }
  };

  const handleUpdate = () => {
    if (data.length > 0) {
      const editTodos = [...todos];
      editTodos[editIndex].text = data;
      setTodos(editTodos);
      setShow(false);
    } else {
      alert("Please enter something");
    }
    setData("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <form>
      <input
        type="text"
        placeholder="Enter todo...."
        onChange={(e) => setData(e.target.value)}
        value={data}
        className="task-input"
      />{" "}
      &nbsp;
      {!show ? (
        <button type="button" className="button-add" onClick={HandleAdd}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
      ) : (
        <button type="button" className="button-update" onClick={handleUpdate}>
          <i className="fa fa-pencil" aria-hidden="true"></i>
        </button>
      )}
    </form>
  );
};

export default Todo;
