// import React, { useState } from "react";
// import TodoForm from "./TodoForm";
// import TodoItem from "./TodoItem";

// function TodoList() {
//   const [todos, setTodos] = useState([
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Learn Node"  }]);
//   const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
//   const addTodo = (todo: any) => {
//     const newTodos = [ ...todos, { ...todo,
//       id: new Date().getTime().toString() }];
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   const deleteTodo = (id: string) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };
//   const updateTodo = (todo: any) => {
//     const newTodos = todos.map((item) =>
//       (item.id === todo.id ? todo : item));
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
//   return (
//     <div>
//       <h2>Todo List</h2>
//       <ul className="list-group">
//         {/* <li className="list-group-item">
//           <input
//             value={todo.title}
//             onChange={(e) =>
//               setTodo({ ...todo,
//                 title: e.target.value })
//             }
//           />&nbsp;
//           <button className="btn btn-warning" onClick={() => updateTodo(todo)}>
//             Update </button>&nbsp;&nbsp;
//           <button className="btn btn-success" onClick={() => addTodo(todo)}>Add</button>
         
          
//         </li>
//         {todos.map((todo) => (
//           <li key={todo.id} className="list-group-item">
//             <span>{todo.title}</span>&#160;
            
//             <button className="btn btn-danger" 
//             onClick={() => deleteTodo(todo.id)}
//             style={{marginLeft:100}}>
//               Delete </button>&#160;&#160;
//             <button className="btn btn-primary" onClick={() => setTodo(todo)}>
//               Edit </button>
            
//           </li>
//         ))} */}
//         <TodoForm
//           todo={todo}
//           setTodo={setTodo}
//           addTodo={addTodo}
//           updateTodo={updateTodo}/>
//         {todos.map((todo) => (
//           <TodoItem
//             todo={todo}
//             deleteTodo={deleteTodo}
//             setTodo={setTodo} />
//         ))}

//       </ul>
//     </div>
//   );
// }
// export default TodoList;

import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { LabState, TodoType } from "../../../store";
function TodoList() {
  const { todos } = useSelector((state: LabState) => state.todosReducer);
  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo: TodoType) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;