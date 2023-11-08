import { data } from "../MockData/data";
export const getCourseById = (courseId) => {
    const course = data.find((course) => course.id == courseId);
    return course;
  };