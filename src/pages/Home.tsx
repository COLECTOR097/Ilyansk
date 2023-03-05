import React, { FC } from "react";

import { Slider } from "../components";

import slideImg from "../assets/images/png/slide.png";

import prevArrow from "../assets/images/svg/prevArrow.svg";
import nextArrow from "../assets/images/svg/nextArrow.svg";

const Home: FC = () => {
  return (
    <div className={"home"}>
      <Slider
        controllers={{
          prevBtn: "slider__btn--prev",
          nextBtn: "slider__btn--next",
        }}
      >
        <div className={"slider__container"}>
          <div className={"slider__slide"}>
            <img src={slideImg} alt="" />
          </div>
          <div className={"slider__slide"}>
            <img src={slideImg} alt="" />
          </div>
          <div className={"slider__slide"}>
            <img src={slideImg} alt="" />
          </div>
        </div>
        <button className={"button slider__btn slider__btn--prev"}>
          <img src={prevArrow} alt="" />
        </button>
        <button className={"button slider__btn slider__btn--next"}>
          <img src={nextArrow} alt="" />
        </button>
      </Slider>
    </div>
  );
};

export default Home;
