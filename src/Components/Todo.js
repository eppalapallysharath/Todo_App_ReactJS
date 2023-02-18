import React, { useEffect } from "react";

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
    const todo = data.trim();
    if (todo === "") {
      alert("write something can't be empty");
    } else {
      setTodos((prevTodos)=>[...prevTodos, { text: todo, completed: false }]);
      setData("");
    }
  };
  console.log(Array.isArray(todos))
  const handleUpdate = () => {
    if (data.length > 0) {
      const editTodo = [...todos];
      editTodo[editIndex].text = data;
      setTodos(editTodo);
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
          Add
        </button>
      ) : (
        <button type="button" className="button-update" onClick={handleUpdate}>
          Update
        </button>
      )}
    </form>
  );
};

export default Todo;
