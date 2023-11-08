import React from "react";
import { Link } from "react-router-dom";
import './CourseCard.css'

function CourseCard({ course }) {
  return (
    <Link
      to={`/details/${course.id}`}
      style={{ textDecoration: "none", color: "white" }}
    >
      <div className="cards">
        <img className="cards__img" src={"https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1973&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
        <div className="cards__overlay">
          <div className="card__title">{course ? course.name : ""}</div>
          <div className="card__runtime">
            {course ? course.instructor : ""}
          </div>
          <div className="card__rating">
              {course ? course.enrollmentStatus:""}⭐
            </div>
          <div className="card__description">
            {course ? course.description.slice(0, 100) + "..." : ""}
          </div>
          <div className="card__date">
            {course ? `Duration:${course.duration}`: ""}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;

//   {course ? course.enrollmentStatus=="Open"? "⭐":"🔴":""}
