import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper/modules";
import pic1 from "../../assets/projects/Incubator-circuit.jpg";
import pic3 from "../../assets/projects/Shuchimita-circuit.jpg";
import HeroCarousel from "./HeroCarousel";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ExperienceCarousel = ({ experienceScrollIndex }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(experienceScrollIndex);
    }
  }, [experienceScrollIndex]);

  return (
    <Swiper
      effect="fade"
      fadeEffect={{ crossFade: true }}
      direction={"vertical"}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      allowTouchMove={false}
      simulateTouch={false}
      spaceBetween={50}
      slidesPerView={1}
      className="lg:max-w-sm lg:h-[24rem] xl:max-w-md xl:h-[28rem]"
      modules={[EffectFade, Pagination]}
    >
      <SwiperSlide className="slide">
        <img
          src={pic1}
          alt="Experience 1"
          className="rounded-xl lg:max-w-sm xl:max-w-md aspect-square object-cover"
        />
      </SwiperSlide>
      <SwiperSlide className="slide">
        <img
          src={pic3}
          alt="Experience 2"
          className="rounded-xl lg:max-w-sm xl:max-w-md aspect-square object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default ExperienceCarousel;
