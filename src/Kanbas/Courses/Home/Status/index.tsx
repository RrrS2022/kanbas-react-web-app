import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaTimesCircle, FaCheckCircle, FaCloudDownloadAlt, FaShare, FaBullseye, FaChartBar, FaBullhorn, FaBell, FaCalendar } from "react-icons/fa";

function CourseStatus() {
  const buttons = [
    { text: "Unpublish", icon: <FaTimesCircle />, className: "btn-unpub" },
    { text: "Publish", icon: <FaCheckCircle />, className: "btn-pub" }
  ];

  const actions = [
    { text: "Import Existing Content", icon: <FaCloudDownloadAlt /> },
    { text: "Import From Commons", icon: <FaShare /> },
    { text: "Choose Home Page", icon: <FaBullseye /> },
    { text: "View Course Stream", icon: <FaChartBar /> },
    { text: "New Announcement", icon: <FaBullhorn /> },
    { text: "New Analytics", icon: <FaChartBar /> },
    { text: "View Course Notifications", icon: <FaBell /> }
  ];

  const todos = [
    { text: "Grade A1 - ENV + HTML", description: "100 points · Sep 18 at 11:59pm" }
  ];

  const comingUpItems = [
    { text: "Lecture", description: "CS4550.12631.202410 Sep 7 at 11:45am" },
    { text: "Lecture", description: "CS4550.12631.202410 Sep 11 at 11:45am" },
    { text: "CS5610 06 SP23 Lecture", description: "Sep 11 at 6pm" }
  ];

  return (
    <>
      <h4>Course Status</h4>
      <div className="d-flex">
        {buttons.map((button, index) => (
          <button key={index} className={button.className}>
            {button.icon}{button.text}
          </button>
        ))}
      </div>

      <div>
        {actions.map((action, index) => (
          <Link to="#" key={index}>
            <button className="bottons">
              {action.icon}{action.text}
            </button>
            <br />
          </Link>
        ))}
      </div>

      <div>
        <h4>TO DO</h4>
        {todos.map((todo, index) => (
          <div key={index}>
            <Link to="#" className="todo">{todo.text}</Link>
            <p className="todo-descrption">{todo.description}</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between">
        <h4>Coming Up</h4>
        <Link to="#" className="float-end vc">
          <FaCalendar /> View Calendar
        </Link>
      </div>

      {comingUpItems.map((item, index) => (
        <div key={index}>
          <Link to="#" className="todo">
            <FaCalendar />&nbsp;{item.text}
          </Link>
          <br />
          <p className="todo-descrption">{item.description}</p>
        </div>
      ))}
    </>
  );
}

export default CourseStatus;
