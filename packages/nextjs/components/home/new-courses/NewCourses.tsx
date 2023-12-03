import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Course_1 from "../../../public/course_1.png";
import styles from "./NewCourses.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const NewCourses = () => {
  const router = useRouter();

  const sliderBreakpoints = {
    320: {
      // when window width is >= 320px
      slidesPerView: 1.2,
      spaceBetween: 16,
    },
    // when window width is >= 480px
    500: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  };
  return (
    <div className="flex flex-col w-full gap-1 mt-3 px-3">
      <h3 className={styles.title}>Nuevos cursos</h3>
      <Swiper breakpoints={sliderBreakpoints} className={styles.swiper}>
        <SwiperSlide>
          <div className={styles.course_card}>
            <div className="items-stretch flex flex-col mt-3 p-3">
              <div className="flex-col justify-between items-center flex w-full gap-5 mt-3 pr-2">
                <div className="justify-center items-stretch flex gap-2 my-auto">
                  <Image loading="lazy" src={Course_1} alt="Icon" width={250} height={110} />
                </div>
                <header className="text-stone-800 text-base font-bold leading-4">Blockchain para principiantes</header>
                <div className="text-stone-800 text-sm leading-5 grow whitespace-nowrap flex justify-between w-full">
                  2h 50min
                  <button
                    onClick={() => router.push("/cursos")}
                    className="justify-center items-center bg-red-600 self-stretch flex aspect-[2.2222222222222223] flex-col px-6 py-1.5 rounded-[30px] max-md:px-5 text-white"
                  >
                    Play
                    {/* <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c7eb2138e0feb36d317aeda5b51720a092f0daf37834ad59526081cbfded59?apiKey=d627bfd8f24e41d3baf6fe092e7f3e3f&"
                    alt="Button Icon"
                    className="aspect-square object-contain object-center w-4 overflow-hidden"
                    /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.course_card}>
            <div className="items-stretch flex flex-col mt-3 p-3">
              <div className="flex-col justify-between items-center flex w-full gap-5 mt-3 pr-2">
                <div className="justify-center items-stretch flex gap-2 my-auto">
                  <Image loading="lazy" src={Course_1} alt="Icon" width={250} height={110} />
                </div>
                <header className="text-stone-800 text-base font-bold leading-4">Blockchain para principiantes</header>
                <div className="text-stone-800 text-sm leading-5 grow whitespace-nowrap flex justify-between w-full">
                  2h 50min
                  <div className="justify-center items-center bg-red-600 self-stretch flex aspect-[2.2222222222222223] flex-col px-6 py-1.5 rounded-[30px] max-md:px-5 text-white">
                    Play
                    {/* <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c7eb2138e0feb36d317aeda5b51720a092f0daf37834ad59526081cbfded59?apiKey=d627bfd8f24e41d3baf6fe092e7f3e3f&"
                    alt="Button Icon"
                    className="aspect-square object-contain object-center w-4 overflow-hidden"
                  /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.course_card}>
            <div className="items-stretch flex flex-col mt-3 p-3">
              <div className="flex-col justify-between items-center flex w-full gap-5 mt-3 pr-2">
                <div className="justify-center items-stretch flex gap-2 my-auto">
                  <Image loading="lazy" src={Course_1} alt="Icon" width={250} height={110} />
                </div>
                <header className="text-stone-800 text-base font-bold leading-4">Blockchain para principiantes</header>
                <div className="text-stone-800 text-sm leading-5 grow whitespace-nowrap flex justify-between w-full">
                  2h 50min
                  <div className="justify-center items-center bg-red-600 self-stretch flex aspect-[2.2222222222222223] flex-col px-6 py-1.5 rounded-[30px] max-md:px-5 text-white">
                    Play
                    {/* <Image
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/03c7eb2138e0feb36d317aeda5b51720a092f0daf37834ad59526081cbfded59?apiKey=d627bfd8f24e41d3baf6fe092e7f3e3f&"
                    alt="Button Icon"
                    className="aspect-square object-contain object-center w-4 overflow-hidden"
                  /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default NewCourses;
