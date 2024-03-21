import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { assignments } from "../../../Database";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";
import { addAssignment, updateAssignment } from "../assignmentsReducer";
import { KanbasState } from "../../../store";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const existAssignment = assignmentList.find((a) => a._id === assignmentId);
  const { courseId } = useParams();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };
  const handleSave = () => {
    if (existAssignment) {
      dispatch(updateAssignment({_id: assignmentId, title}));
    } else {
      dispatch(addAssignment({_id: assignmentId, title}));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    
  };
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
            <span className="float-end">
                <span style={{ color: "green", marginRight: "10px" }}>
                <FaCheckCircle className="text-success" /> 
                Published
                </span>
                <button className="top-buttons"><FaEllipsisV /></button> 
            </span>
            </div>
        </div>
        <hr />

        <h2>Assignment Name</h2>
        <input value={title}
                className="form-control mb-2" 
                onChange={handleTitleChange}/>
        <div className="mb-3">
            <textarea 
            className="form-control"
            placeholder="This should be description of the assignment."
            rows={3}></textarea>
        </div>  
        <div className="container">
        <div className="mb-3 row justify-content-center">
          <label htmlFor="points" className="col-sm-3 col-form-label" style={{ paddingLeft: "200px", paddingRight: "50px" }}>
            Points
          </label>
          <div className="col-sm-7">
            <input type="number" className="form-control" id="points" />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="group" className="col-sm-4 col-form-label" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            Assignment Group
          </label>
          <select id="group" className="form-select col-sm-8" style={{ width: "400px", marginLeft: "20px" }}>
            <option selected>ASSIGNMENT</option>
            <option value="quiz">QUIZ</option>
            <option value="exam">EXAM</option>
            <option value="project">PROJECT</option>
          </select>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="display_grade-as" className="col-sm-4 col-form-label" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            Display Grade as
          </label>
          <select id="display_grade-as" className="form-select col-sm-8" style={{ width: "400px", marginLeft: "20px" }}>
            <option selected>Percentage</option>
          </select>
        </div>
        <div className="mb-3 row justify-content-center">
          <label htmlFor="submission_type" className="col-sm-4 col-form-label" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
            Submission Type
          </label>
          <select id="submission_type" className="form-select col-sm-8" style={{ width: "400px", marginLeft: "20px" }}>
            <option selected>Online</option>
          </select>
        </div>
        <div className="row mb-3">
            <div className="col-sm-8 offset-sm-4">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="r6" />
                <label className="form-check-label" htmlFor="r6">
                    Do not count this assignment towards the final grade
                </label>
                </div>
            </div>
        </div>
        </div>
        <div className="d-flex">
        <div>
          <label className="col-sm-3 col-form-label" style={{ paddingLeft: "200px", paddingRight: "50px" }}>Assign</label>
        </div>
        <div className="container" style={{ border: "1px solid lightgray" }}>
          <div className="mb-3">
            <label htmlFor="assign_to" className="form-label"><h4>Assign to</h4></label>
            <input className="form-control" id="assign_to" placeholder="Everyone" />
          </div>
          <div className="mb-3">
            <label htmlFor="due" className="form-label"><h4>Due</h4></label>
            <input type="date" className="form-control" id="due" />
          </div>
          <div className="mb-3 row">
            <div className="col">
              <h4>Available from</h4>
              <input type="date" className="form-control" />
            </div>
            <div className="col">
              <h4>Until</h4>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="row" style={{ paddingBottom: "15px", paddingTop: "10px", backgroundColor: "#F5F5F5" }}>
            <div className="col text-center">
              <i className="fa fa-plus" aria-hidden="true"></i>Add
            </div>
          </div>
        </div>
      </div>
      <hr />
        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
            Save
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end">
            Cancel
        </Link>
    </div>
  );
}
export default AssignmentEditor;