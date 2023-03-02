import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Pagination, EffectFade } from "swiper";

import Welcome from "../components/home-section/welcome/Welcome";

SwiperCore.use([Mousewheel, Pagination, EffectFade]);
const swiperOptions = {
  direction: "vertical",
  slideperview: 1,
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
        <SwiperSlide>slide 2</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Home;
