import { assignments, enrollments, grades, users } from "../../Database";
import { Link, useParams } from "react-router-dom";
import { FaCog, FaSignInAlt, FaSignOutAlt, FaFilter } from 'react-icons/fa';

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div className="d-flex flex-row-reverse bd-highlight">
        <div className="p-2 bd-highlight">
          <Link to="#" className="btn btn-light" style={{ height: 35 }}>
            <FaCog />
          </Link>
        </div>
        <div className="p-2 bd-highlight">
          <Link to="#" className="btn btn-light">
            <FaSignOutAlt />
            Export
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="p-2 bd-highlight">
          <Link to="#" className="btn btn-light">
            <FaSignInAlt />
            Import
          </Link>
        </div>
      </div>
      <div className="mb-3 row">
          <div className="col">
            <h5>Student Names</h5>
            <select className="form-select">
              <option value="" disabled selected>Student Names</option>
            </select>
          </div>
          <div className="col">
            <h5>Assignment Names</h5>
            <select className="form-select">
              <option value="" disabled selected>Assignment Names</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <Link to="#" className="btn btn-light" role="button">
            <FaFilter />
            Apply Filters
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Student Name</th>
              {as.map((assignment) => (<th>{assignment.title}</th>))}
            </tr>
          </thead>

          <tbody>
            {es.map((enrollment) => {
                const user = users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <td>{user?.firstName} {user?.lastName}</td>
                    {as.map((assignment) => {
                      const grade = grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                        return (<td>{grade?.grade || ""}</td>);})}
                  </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;