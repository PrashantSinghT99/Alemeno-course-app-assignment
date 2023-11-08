import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { getCourseById } from "../../Utility/course";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./CourseDetail.css";
const CourseDetail = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.loggedUserSlice.user);
  console.log("logged user", user);
  // const tableStyle = {
  //   margin: "0 auto",
  //   border: "1px solid #ccc",
  //   width: "60%",
  //   marginBottom:"10px",
  //   marginTop:"10px",
  //   borderRadius: "5px",
  //   boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  // };

  // const rowStyle = {
  //   display: "flex",
  //   borderBottom: "1px solid #ccc",
  // };

  // const cellStyle = {
  //   flex: 1,
  //   padding: "10px",
  // };

  const [course, setCourse] = useState(null);
  const [isSyllabusVisible, setSyllabusVisible] = useState(false);

  // Function to toggle the visibility of the syllabus
  const toggleSyllabus = () => {
    setSyllabusVisible(!isSyllabusVisible);
  };
  const { id } = useParams();
  console.log("ID", id);
  const fetchCourseDetails = () => {
    const courseDetails = getCourseById(id);
    console.log(courseDetails);
    if (courseDetails) {
      setCourse(courseDetails);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return; // Return early if the user is not available
    } else {
      fetchCourseDetails();
    }
  }, [id]);
  if (!course) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="course-detail">
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
      </div>
      <div className="text-details">
        <div className="blackish-overlay">
          <h2 className="course-title">{course.name}</h2>

          <p className="instructor">Instructor: {course.instructor}</p>
          <p className="description">Description: {course.description}</p>
          <p className="prerequisites">
            Pre-requisites: {course.prerequisites.join(", ")}
          </p>
          <table className="tableStyle">
            <tbody>
              <tr className="rowStyle">
                <td className="cellStyle">Enrollment Status</td>
                <td className="cellStyle">Course Duration</td>
                <td className="cellStyle">Schedule</td>
                <td className="cellStyle">Location</td>
              </tr>
              <tr className="rowStyle">
                <td className="cellStyle">{course.enrollmentStatus}</td>
                <td className="cellStyle">{course.duration}</td>
                <td className="cellStyle">{course.schedule}</td>
                <td className="cellStyle">{course.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="enrollment-box">
      </div>

      <div className="course-info">
        <div className="syllabus">
          {/* <h3>Syllabus</h3> */}
          {isSyllabusVisible && (
            <ul className="syllabus-list">
              {course.syllabus.map((item) => (
                <li key={item.week}>
                  Week {item.week}: {item.topic} - {item.content}
                </li>
              ))}
            </ul>
          )}
          <button onClick={toggleSyllabus} className="toggle-button">
            {isSyllabusVisible ? "Hide Syllabus" : "Show Syllabus"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
