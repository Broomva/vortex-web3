import React from "react";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { Categories } from "./categories/Categories";
import CourseProgress from "./courseProgress/CourseProgress";
import { Hero } from "./hero/Hero";
import NewCourses from "./new-courses/NewCourses";

export const HomePage = () => {
  return (
    <div className="flex items-center flex-col flex-grow overflow-hidden">
      <Hero />
      <MaxWidthWrapper>
        <Categories />
        <NewCourses />
        <CourseProgress />
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
