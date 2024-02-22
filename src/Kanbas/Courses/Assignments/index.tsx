import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaCaretDown, FaPencilAlt} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
        <input className="w-25" placeholder="Search for Assignments" />
        <span className="float-end">
            <button className="top-buttons">+ Group</button>
            <button className="top-buttons" style={{ backgroundColor: "rgb(171, 14, 22)", color: "white" }}>+ Assignment</button>

            <button className="top-buttons">
                <FaEllipsisV /></button>
        </span>
        <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /><FaCaretDown className="me-2"/> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item" key={assignment._id}>
                <FaEllipsisV className="me-2" /><FaPencilAlt className="me-2"/>
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
);}
export default Assignments;