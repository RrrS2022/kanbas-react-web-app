import React, { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaCaretDown, FaPencilAlt} from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { deleteAssignment } from "./assignmentsReducer";
import { KanbasState } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments);
  const assignment = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignment);
  const [showModal, setShowModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  
  const handleDelete = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteAssignment(assignmentToDelete));
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  // const assignmentList = assignments.filter(
  //   (assignment) => assignment.course === courseId);
  return (
    <div>
        <input className="w-25" placeholder="Search for Assignments" />
        <span className="float-end">
            <button className="top-buttons">+ Group</button>
            <Link  to={`/Kanbas/Courses/${courseId}/Assignments/new`} 
              style={{ textDecoration: "none" }}>
              <button className="top-buttons" 
                style={{ backgroundColor: "rgb(171, 14, 22)", color: "white" }}>
                + Assignment
              </button>
            </Link>
            <button className="top-buttons">
                <FaEllipsisV />
            </button>
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
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                      {assignment.title}</Link>
          
                  <span className="float-end">
                  <button className="btn btn-danger" 
                    onClick={() => handleDelete(assignment._id)}
                    style={{marginRight:20, width: 50, borderRadius:"4px"}}
                  > Delete </button>
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
               
              </li>))}
          </ul>
        </li>
      </ul>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            No
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>


              

    </div>
);}
export default Assignments;