import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCaretDown} from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

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
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <FaCaretDown className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
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