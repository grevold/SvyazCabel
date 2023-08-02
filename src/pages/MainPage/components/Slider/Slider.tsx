import { texts } from "../../../../texts";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { Slide } from "./components/Slide";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSlider } from "./useSlider";

import s from "./Slider.module.css";
import { useState, useEffect } from "react";

const swiperConfig: SwiperProps = {
  modules: [Autoplay, Pagination, Navigation],
  onAutoplayTimeLeft: function () { },
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 800000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  direction: "horizontal",
  speed: 1200,
  navigation: true,
  loop: true,
  onSlideChange: function slideChange() { console.log("slide change") }
};

export const Slider = () => {
  useSlider();
  const activeSlider = document.querySelector(".swiper-slide swiper-slide-active")

  return (
    <div className={s.root}>
      <Swiper {...swiperConfig}>
        {texts.Slider.map((product) => (
          <SwiperSlide key={product.title}>
            <Slide product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
