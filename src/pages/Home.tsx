import React, { FC } from "react";

import { Slider } from "../components";

import slideImg from "../assets/images/png/slide.png";

import prevArrow from "../assets/images/svg/prevArrow.svg";
import nextArrow from "../assets/images/svg/nextArrow.svg";

const Home: FC = () => {
  return (
    <div className={"home"}>
      <div className="news">
        <div className="news__main">
          <Slider
            controllers={{
              prevBtn: "news__main--prev",
              nextBtn: "news__main--next",
            }}
            pagination={true}
            spaceBtw={5}
          >
            <div className={"slider__container"}>
              <div className={"slider__slide "}>
                <img src={slideImg} alt="" />
                <div className={"desc"}>
                  <div className="desc__title">
                    Начните день с вкусной выпечи из нашей кулинарии
                  </div>
                  <button className="button desc__btn">
                    Перейти к покупкам
                  </button>
                </div>
              </div>
              <div className={"slider__slide"}>
                <img src={slideImg} alt="" />
                <div className={"desc"}>
                  <div className="desc__title">
                    Начните день с вкусной выпечи из нашей кулинарии
                  </div>
                  <button className="button desc__btn">
                    Перейти к покупкам
                  </button>
                </div>
              </div>
              <div className={"slider__slide"}>
                <img src={slideImg} alt="" />
                <div className={"desc"}>
                  <div className="desc__title">
                    Начните день с вкусной выпечи из нашей кулинарии
                  </div>
                  <button className="button desc__btn">
                    Перейти к покупкам
                  </button>
                </div>
              </div>
            </div>
            <button className={"button news__main--btn news__main--prev"}>
              <img src={prevArrow} alt="" />
            </button>
            <button className={"button news__main--btn news__main--next"}>
              <img src={nextArrow} alt="" />
            </button>
          </Slider>
        </div>
        <div className="news__bonus"></div>
      </div>
    </div>
  );
};

export default Home;
