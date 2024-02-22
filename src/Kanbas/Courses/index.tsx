import { assignments, courses } from "../../Kanbas/Database";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import { FaGraduationCap , FaChevronRight} from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

export function CourseHeader({ courseId, currentNavItem }: { courseId: string; currentNavItem: string }){
  return (
    <div className="d-flex justify-content-between align-items-center d-block d-md-none" style={{ backgroundColor: "black", color: "white" }}>
      <div style={{ marginLeft: "10px" }}>
      <Link to="#" style={{ textDecoration: "none" }}>
        <HiMiniBars3/>
      </Link>
      </div>
      <div style={{ textAlign: "center" }}>
        {courseId}<br />{currentNavItem}
      </div>
      <div style={{ marginRight: "10px" }}>
        <FaGraduationCap />
        <a href={`/Kanbas/Courses/${courseId}/Home/courseMenu.html`}>
          <FaChevronRight />
        </a>
      </div>
    </div>
  );
}

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const caps = [{label:"Student View", icon: <FaGraduationCap/>}]
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);

  let currentNavItem = '';
  if (pathname.includes('Modules')) {
    currentNavItem = 'Modules';
  } else if (pathname.includes('Piazza')) {
    currentNavItem = 'Piazza';
  } else if (pathname.includes('Assignments')) {
    currentNavItem = 'Assignments';
  } else if (pathname.includes('Grades')) {
    currentNavItem = 'Grades';
  } else {
    currentNavItem = 'Home'; // If none of the above, set it to Home
  }

  return (
    <div className="d-flex flex-column">
    {courseId && <CourseHeader courseId={courseId} currentNavItem={currentNavItem} />}

      <div className="breadcrumb-bar flex-row d-none d-md-flex">
        <div className="breadcrumb-item">
          <Link to="/Kanbas/Courses/Home" className="breadcrumb-link">
            <HiMiniBars3 className="breadcrumb-icon" />
          </Link>
          <span className="course-id">{course?._id}</span>
          <span className="breadcrumb-symbol"> &gt;</span>
          <span className="current-nav-item"> {currentNavItem}</span>
          {assignment && (
          <>
            <span className="breadcrumb-symbol"> &gt;</span>
            <span className="selected-assignment">{assignment.title}</span>
          </>
        )}
          <button className="student-view-button">
            Student View&nbsp; <FaGraduationCap />
          </button>
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="flex-column d-none d-md-block">
          <CourseNavigation />
        </div>

        <div className="flex-column flex-grow-1">
          <div
            className="overflow-y-scrollbottom-0 end-0"
            style={{ left: "320px", top: "50px" }} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home/>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
              <Route path="Grades" element={<Grades/>} />
            </Routes>
          </div>
        </div>
      </div>


    </div>
  );
}
export default Courses;