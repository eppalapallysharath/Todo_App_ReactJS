import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";

function App() {
  const initialState = ()=>{
  try {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return todos || []
  } catch (error) {
    console.log(error);
    return []
  }
}
  const [data, setData] = useState("");
  const [todos, setTodos] = useState(initialState()|| []);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Todo data={data} setData={setData} todos={todos} setTodos={setTodos} show={show} setShow={setShow} setEditIndex={setEditIndex} editIndex={editIndex} />
        </div>
        <div>
          <TodoList data={data} setData={setData} todos={todos} setTodos={setTodos} show={show} setShow={setShow} editIndex={editIndex} setEditIndex={setEditIndex}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
