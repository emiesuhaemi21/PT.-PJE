"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function HeroSlider() {
  return (
    <div className="bg-red-900 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-2xl overflow-hidden h-[250px] md:h-[400px]"
        >
          <SwiperSlide>
            <img
              src="/slide1.jpg"
              alt="slide1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/slide2.jpg"
              alt="slide2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="/slide3.jpg"
              alt="slide3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}