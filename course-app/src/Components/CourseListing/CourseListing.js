import React, { useEffect, useState } from "react";
import { data } from "../../MockData/data";
import CourseCard from "../CourseCard/CourseCard";
import { useNavigate } from "react-router";
import "./CourseListing.css";
import { useSelector } from "react-redux";
import { fetchDataFromApi } from '../../MockApi/mockApi';
const CourseListing = () => {
  const [courseData, setCourseData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((store) => store.loggedUserSlice.user);
  console.log("logged user", user);

  useEffect(() => {
    if (!user) {
      navigate("/");
      return; // Return early if the user is not available
    } else {
      fetchAllCourses();
    }
  }, []);

  useEffect(() => {
    const filtered = courseData.filter((course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) || course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filtered);
    setFilteredCourses(filtered);
  }, [searchTerm]);

  const fetchAllCourses = async () => {
    try {
      const response = await fetchDataFromApi();
      setCourseData(response);
    } catch (error) {
      console.error('Error fetching data from the API:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="courseListing">
      <div className="search">
        <input
          className="search-box"
          type="text"
          placeholder="Search by course name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <h2>Recommended Courses for you</h2>
      <div className="course-list">
        {searchTerm === ""
          ? courseData.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          : filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
      </div>
    </div>
  );
};

export default CourseListing;
