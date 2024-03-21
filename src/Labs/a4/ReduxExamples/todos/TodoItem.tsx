// function TodoItem({ todo, deleteTodo, setTodo }: {
//     todo: { id: string; title: string };
//     deleteTodo: (id: string) => void;
//     setTodo: (todo: { id: string; title: string }) => void;
//   }) {
//     return (
//       <li key={todo.id} className="list-group-item">
//         {todo.title}&#160;&#160;
//         <button className="btn btn-primary" 
//         onClick={() => setTodo(todo)}
//         style={{marginLeft:100}}> Edit </button>&#160;
//         <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}> Delete </button>
//       </li>
//     );
//   }
//   export default TodoItem

import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo, } from "./todosReducer";
import { TodoType } from "../../../store";

function TodoItem({ todo }:{todo: TodoType}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      {todo.title}&#160;&#160;
      <button className="btn btn-primary"
       onClick={() => dispatch(setTodo(todo))}
       style={{marginLeft:100}}> Edit </button>
      <button className="btn btn-danger"
       onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
    </li>
  );
}
export default TodoItem;