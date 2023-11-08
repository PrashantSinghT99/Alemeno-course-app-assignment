import React, { useEffect, useState } from "react";
import CourseCard from "../CourseCard/CourseCard";
import { useSelector } from "react-redux";
import { data } from "../../MockData/data";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import './Dashboard.css'
const Dashboard = () => {
  const [coursesForCurrentUser, setCoursesForCurrentUser] = useState([]);
  const user = useSelector((store) => store.loggedUserSlice.user);
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState({});
  useEffect(() => {
    if (!user) {
      navigate("/");
      return; 
    } else {
      const filteredCourses = data.filter((course) =>
        course.students.some((student) => student.id == user.uid)
      );

      setCoursesForCurrentUser(filteredCourses);
    }
  }, [user]);

  function extractTextBeforeAt(email) {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
      return email.substring(0, atIndex);
    } else {
      return email;
    }
  }
  const handleMarkComplete = (courseId) => {
    setButtonClicked((prevClicked) => ({
      ...prevClicked,
      [courseId]: !prevClicked[courseId],
    }));
  };
  return coursesForCurrentUser.length !== 0 ? (
    <div className="dashboard">
      <h2>Welcome, {user && extractTextBeforeAt(user.email)}!</h2>
      <h3>Your Enrolled Courses</h3>
      <div className="course-list">
        {coursesForCurrentUser.map((course) => (
          <>
            <div className="dashboard-detail">
              <CourseCard  key={course.id} course={course} />
              <button
              key={uuidv4()}
              onClick={() => handleMarkComplete(course.id)}
              className={buttonClicked[course.id] ? "green-button" : ""}
            >
            { buttonClicked[course.id]?"Mark Incomplete" : "Mark Complete"}
            </button>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${course.progress}%`,
                }}
              ></div>
            </div>
          </>
        ))}
      </div>
    </div>
  ) : (
    <h1 className="not-enrolled">You havent enrolled in any course!</h1>
  );
};

export default Dashboard;
