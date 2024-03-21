import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  // const [modulesList, setModuleList] = useState<any[]>(modules);
  // // const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  // const [module, setModule] = useState({
  //   _id: "",
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });
  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...modulesList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = modulesList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   const newModuleList = modulesList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };



  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="d-flex">
        <span className="ms-auto">
          <button className="top-buttons">Collapse All</button>
          <button className="top-buttons">Expand All</button>
          <button className="top-buttons">View Progress</button>
          <select>
            <option>Publish All</option>
            <option>Unpublish All</option>
            <option>Unpublish All</option>
          </select>
          <button className="top-buttons" style={{ backgroundColor: "rgb(171, 14, 22)", color: "white" }}>+ Module</button>
          <button className="top-buttons">
          <FaEllipsisV /></button>
        </span>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item" style={{backgroundColor:"white"}}>
        <div style={{ display: 'flex', }}>
            <div style={{display: 'flex-cloumn'}}>
              <input
              style={{border:"solid #ccc", marginBottom:"10px", marginTop:"10px", marginLeft:"10px", width:"200px", height:"40px", borderRadius:"4px"}}
               value={module.name}
                onChange={(e) => 
                  dispatch(setModule({ ...module, name: e.target.value }))}
              /><br />
              <textarea style={{border:"solid #ccc", width:"200px", height: "70px", marginLeft:"10px", marginBottom:"10px", borderRadius:"4px"}} value={module.description}
                 onChange={(e) =>
                  dispatch(setModule({ ...module, description: e.target.value }))
                }
              />
            </div>
            <div style={{display:"flex-column"}}>
              <button className="btn btn-warning"
                style={{marginLeft:"20px", marginTop:"10px", borderRadius:"4px", width:55, height:"40px", }}
                onClick={() => dispatch(updateModule(module))}>
                Update
              </button>
              <button className="btn btn-success" 
                style={{marginLeft:"5px", marginTop:"10px", borderRadius:"4px", width:55, height:"40px", }}
                onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add
              </button>

            </div>
            
          </div>  
        </li>

        {modulesList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <FaCaretDown className="me-2" />
              
              {module.name}
              <button className="btn btn-success"
                style={{marginLeft:"20px", borderRadius:"4px", width:"60px"}}
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>

              <button className="btn btn-danger" 
                style={{marginLeft:"5px", borderRadius:"4px", width:"60px"}}
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              {/* <p>{module.description}</p>
              <p>{module._id}</p> */}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson:any, index:number) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;