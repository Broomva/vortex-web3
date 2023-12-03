import React from "react";
import { Categories } from "./categories/Categories";
import { Hero } from "./hero/Hero";

export const HomePage = () => {
  return (
    <div className="flex items-center flex-col flex-grow overflow-hidden">
      <Hero />
      <Categories />
    </div>
  );
};

export default HomePage;
