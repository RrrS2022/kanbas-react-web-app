import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";

  // const [_courses, setCourses] = useState(courses);
  // const [_course, setCourse] = useState( {
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/${course.image}"
  // });
  // const updateCourse = () => {
  //   setCourses(
  //     _courses.map((c) => {
  //       if (c._id === _course._id) {
  //         return _course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // const addNewCourse = () => {
  //   const newCourse = { ..._course,
  //                       _id: new Date().getTime().toString(),
  //                     image: "/images/${course.image}" };
  //   setCourses([..._courses, { ..._course, ...newCourse }]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(_courses.filter((course) => course._id !== courseId));
  // };
  function Dashboard({ _courses, _course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    _courses: any[]; _course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (courseId: string) => void;
    updateCourse: () => void; }) 
    {
    return (
      <div className="p-4" style={{ height: "100vh" }}>
        <h1>Dashboard</h1> 
        <h5>Course</h5>
        <input value={_course.name} className="form-control"
              onChange={(e) => setCourse({ ..._course, name: e.target.value }) } />
        <input value={_course.number} className="form-control"
              onChange={(e) => setCourse({ ..._course, number: e.target.value }) } />
        <input value={_course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ..._course, startDate: e.target.value }) }/>
        <input value={_course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ..._course, endDate: e.target.value }) } />
        <button className="btn btn-success" onClick={addNewCourse} >
          Add
        </button> 
        <button className="btn btn-warning" style={{marginLeft:10}} onClick={updateCourse} >
          Update
        </button>
            
        <hr />
        <h2>Published Courses (12)</h2> <hr />
        
        <div className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {_courses.map((course) => (
              <div key={course._id} className="col" style={{ width: 300 }}>
                <div className="card">
                  <img src={`/images/${course.image}`} className="card-img-top"
                      style={{ height: 150 }}/>
                  <div className="card-body">
                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                      style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      {course._id}
                      <button className="btn btn-primary"
                      style={{marginLeft: 20}}
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                        // editCourse(course);
                      }}> Edit
                      </button>
                      <button className="btn btn-danger" 
                        style={{marginLeft: 10}}
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>
                    </Link>
                    <p className="card-text">{course.name}</p>
                    <p className="card-description">{course.startDate + ' -> ' + course.endDate}</p>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
export default Dashboard;
// export interface CoursesType {
//   _id: string;
//   name: string;
//   number: string;
//   startDate: string;
//   endDate: string;
//   image: string;
// };