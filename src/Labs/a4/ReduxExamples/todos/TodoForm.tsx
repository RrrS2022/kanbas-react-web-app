import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";

// function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
//     todo: { id: string; title: string };
//     setTodo: (todo: { id: string; title: string }) => void;
//     addTodo: (todo: { id: string; title: string }) => void;
//     updateTodo: (todo: { id: string; title: string }) => void;
//   }) {
    
//     return (
//       <li className="list-group-item">
//         <input
//           value={todo.title}
//           onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }
//           style={{marginRight: 10}}
//         />
//         <button className="btn btn-warning" onClick={() => updateTodo(todo)}> Update </button>&#160;
//         <button className="btn btn-success" onClick={() => addTodo(todo)}> Add </button>

        
//       </li>
//     );
//   }
//   export default TodoForm;
function TodoForm() {
      const { todo } = useSelector((state: LabState) => state.todosReducer);
      const dispatch = useDispatch();
      return (
        <li className="list-group-item">
          <input
            value={todo.title}
            onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            style={{marginRight: 10}}
          />
          <button className="btn btn-warning"
           onClick={() => dispatch(updateTodo(todo))}> Update </button>
          <button  className="btn btn-success"
           onClick={() => dispatch(addTodo(todo))}> Add </button>
          
          
        </li>
      );
    }
    export default TodoForm;