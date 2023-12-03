import React from "react";
import { Categories } from "./categories/Categories";
import CourseProgress from "./courseProgress/CourseProgress";
import { Hero } from "./hero/Hero";
import NewCourses from "./new-courses/NewCourses";

export const HomePage = () => {
  return (
    <div className="flex items-center flex-col flex-grow overflow-hidden">
      <Hero />
      <Categories />
      <NewCourses />
      <CourseProgress />
    </div>
  );
};

export default HomePage;
