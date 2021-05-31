import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id} = props;
  const [check, setCheck] = useState(false);
  const checkClick = () => {
    setCheck(!check);
  }

  // const lineThrough = (e) => {
  //   e.target.className !== 'line-through' ? e.target.className = 'line-through' : e.target.className = null;
  // }


  return (<div onClick={checkClick} className={`d-flex align-items-center ${check ? "checked" : ""}`}><span>{content}</span>
    <button value={id} onClick={() => props.deleteTodo(id)} className="btn btn-danger ml-auto">Sil</button>
  </div>);
  
}

export default Todo;
