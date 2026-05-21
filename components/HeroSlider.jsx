"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      <SwiperSlide>
        <img src="/slide1.jpg" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/slide2.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}