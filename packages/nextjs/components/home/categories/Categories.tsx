import React from "react";
import Image from "next/image";
import Categoria1 from "../../../public/categoria_1.svg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export const Categories = () => {
  return (
    <Swiper
      className="w-full flex-grow overflow-hidden"
      spaceBetween={8}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="category_card">
          <Image
            loading="lazy"
            src={Categoria1}
            alt="Categoria 1"
            className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
          />
          <div className="category_label">Blockchain</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Categories;
