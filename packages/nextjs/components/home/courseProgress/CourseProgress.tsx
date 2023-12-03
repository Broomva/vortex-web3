import React from "react";
import Image from "next/image";
import ActualCourse from "../../../public/actual_course.png";
import styles from "./CourseProgress.module.css";

const CourseProgress = () => {
  return (
    <div className=" w-full px-3 flex flex-col gap-1 mt-3 pb-2">
      <h3 className={styles.title}>Continúa aprendiendo</h3>

      <form className="items-stretch self-stretch shadow-md bg-white flex gap-2.5 p-2 rounded-2xl mt-3">
        <div className="flex-col justify-center items-center overflow-hidden relative flex aspect-[0.8076923076923077] w-[105px]   rounded-2xl ">
          <Image loading="lazy" src={ActualCourse} alt={"Actual Course"} width={105} height={130} />
        </div>
        <div className="justify-between items-stretch flex grow basis-[0%] flex-col px-5">
          <div className="justify-between items-stretch flex w-full gap-5">
            <div className="text-black text-base font-bold leading-4 grow whitespace-nowrap">
              Principios del blockain
            </div>
            {/* <div className="flex justify-between gap-1 items-start">
              <div className="text-black text-sm leading-5 grow whitespace-nowrap">cuenta </div>
            </div> */}
          </div>
          <div className="fill-stone-100 flex flex-col justify-center items-stretch mt-20 max-md:mt-10">
            <div className="bg-zinc-200 flex shrink-0 h-2 flex-col" />
          </div>
          <div className="text-black text-sm leading-5 whitespace-nowrap mt-2">50% completado</div>
        </div>
      </form>
    </div>
  );
};

export default CourseProgress;
