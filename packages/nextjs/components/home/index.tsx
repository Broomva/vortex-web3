import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { Categories } from "./categories/Categories";
import { Hero } from "./hero/Hero";
import NewCourses from "./new-courses/NewCourses";

export const HomePage = () => {
  return (
    <div className="flex items-center flex-col flex-grow overflow-hidden">
      <Hero />
      <MaxWidthWrapper>
        <Categories />
        <NewCourses />
      </MaxWidthWrapper>
    </div>
  );
};

export default HomePage;
