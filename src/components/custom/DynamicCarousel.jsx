import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const DynamicCarousel = ({ images}) => {
  useEffect(() => {}, [images]);

  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      loop={true}
      freeMode={true}
      className="lg:max-w-sm lg:h-[24rem] xl:max-w-md xl:h-[28rem]"
      modules={[Pagination, Navigation]}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<div class="${className} custom-bullet"></div>`;
        },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="slide">
          <img
            src={image}
            alt={`Experience ${index + 1}`}
            className="rounded-xl lg:max-w-sm xl:max-w-md aspect-square object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DynamicCarousel;
