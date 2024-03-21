import React, { useState } from "react";
function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
//   return (
//     <div>
//       <h2>Array State Variable</h2>
//       <button className="btn btn-success" onClick={addElement}>Add Element</button>
//       <ul>
//         {array.map((item, index) => (
//           <li key={index}             
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             margin: "5px",
//             position: "relative",
//           }}>
//             {/* {item} */}
//             <span>{item}</span>
//             <button className="btn btn-danger float-right" 
//             onClick={() => deleteElement(index)}
//             style={{
//                 marginLeft:300,
        
//               }}>
//               Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
return (
    <div>
      <h2>Array State Variable</h2>
      <button className="btn btn-success" onClick={addElement}>Add Element</button>
      <table style={{ borderCollapse: "collapse", width: "20%" }}>
        <tbody>
          {array.map((item, index) => (
            <tr
              key={index}
              style={{
                border: "1px solid #ccc",
              }}
            >
              <td style={{ padding: "10px" }}>
                <span>{item}</span>
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteElement(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}
export default ArrayStateVariable;