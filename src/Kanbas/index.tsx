import {Link, Navigate, Route, Routes} from "react-router-dom";
import Nav from "../Nav";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import React, { useState } from "react";
import { courses } from "./Database";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
  const [_courses, setCourses] = useState(courses);
  const [_course, setCourse] = useState( {
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "reactjs.jpg"
  });
  const updateCourse = () => {
    setCourses(
      _courses.map((c) => {
        if (c._id === _course._id) {
          return _course;
        } else {
          return c;
        }
      })
    );
  };

  const addNewCourse = () => {
    const newCourse = { ..._course,
                        _id: new Date().getTime().toString(),
                      };
    setCourses([..._courses, { ..._course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(_courses.filter((course) => course._id !== courseId));
  };

 return(
  <Provider store={store}>
    <div>
      {/* <Nav/> */}
      <div className="d-flex d-row">
        <div className="flex-column d-none d-md-block">
          <KanbasNavigation/>
        </div>
      
        <div style={{ flexGrow: 1 }}>
        <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                _courses={_courses}
                _course={_course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}/>} />
            <Route path="Courses" element={<h1>Courses</h1>} />
            <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
          </Routes>

        </div>
      </div>

    </div>
  </Provider>
 )
}

 export default Kanbas