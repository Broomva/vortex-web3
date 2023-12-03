import React from "react";
import Image from "next/image";
import Categoria1 from "../../../public/categoria_1.svg";
import Categoria2 from "../../../public/categoria_2.svg";
import Categoria3 from "../../../public/categoria_3.svg";
import styles from "./Categories.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const Categories = () => {
  return (
    <div className="flex flex-col w-full gap-1 mt-3 px-3">
      <h3 className={styles.title}>Categorias</h3>
      <Swiper className={styles.swiper} spaceBetween={8} slidesPerView={3}>
        <SwiperSlide>
          <div className={styles.category_card}>
            <Image loading="lazy" src={Categoria1} alt="Categoria 1" width={24} height={24} />
            <div className="category_label">Blockchain</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.category_card}>
            <Image loading="lazy" src={Categoria2} alt="Categoria 1" width={24} height={24} />
            <div className="category_label">Marketing</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.category_card}>
            <Image loading="lazy" src={Categoria3} alt="Categoria 1" width={24} height={24} />
            <div className="category_label">Marketing</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.category_card}>
            <Image loading="lazy" src={Categoria3} alt="Categoria 1" width={24} height={24} />
            <div className="category_label">Marketing</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
