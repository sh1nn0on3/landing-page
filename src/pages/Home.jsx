import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Mousewheel, Pagination, EffectFade } from "swiper";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);

const swiperOptions = {
  direction: "vertical",
  slidePerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

const Home = () => {
  return (
    <>
      <Swiper {...swiperOptions}>
        <SwiperSlide>slide 1</SwiperSlide>
        <SwiperSlide>slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
