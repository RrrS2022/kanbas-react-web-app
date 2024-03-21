// import React, { useState } from "react";
// function Counter() {
//   let count = 7;
//   console.log(count);
//   return (
//     <div>
//       <h2>Counter: {count}</h2>
//       <button className="btn btn-success"
//         onClick={() => { count++; console.log(count); }}>
//         Up
//       </button>
//       <button className="btn btn-danger" style={{marginLeft: '10px'}}
//         onClick={() => { count--; console.log(count); }}>
//         Down
//       </button>
//     </div>
//   );
// }
// export default Counter;

import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn btn-success" onClick={() => setCount(count + 1)}>Up</button>
      <button className="btn btn-danger" style={{marginLeft: '10px'}}
       onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
export default Counter;