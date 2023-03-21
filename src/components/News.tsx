import React, { FC } from "react";

import { NewsItems } from "../redux/news/types";
import { useSelector } from "react-redux";
import { getNewsItems } from "../redux/news/selectors";

import { Slider } from "./index";

import slideImg from "../assets/images/png/slide.png";

import prevArrow from "../assets/images/svg/prevArrow.svg";
import nextArrow from "../assets/images/svg/nextArrow.svg";
import cashback from "../assets/images/png/cashback.png";
import star from "../assets/images/png/star.png";
import feedback from "../assets/images/png/feedback.png";

const News: FC = () => {
  const { items } = useSelector(getNewsItems);

  return (
    <div className="news">
      <div className="news__main">
        <Slider
          controllers={{
            prevBtn: "news__main--prev",
            nextBtn: "news__main--next",
          }}
          pagination={true}
          spaceBtw={10}
        >
          {items.map((item: NewsItems) => {
            return (
              <div key={item.id} className={"slider__slide "}>
                <img src={slideImg} alt="" />
                <div className={"desc"}>
                  <div className="desc__title">{item.title}</div>
                  <button className="button desc__btn">
                    Перейти к покупкам
                  </button>
                </div>
              </div>
            );
          })}
          <button className={"button news__main--btn news__main--prev"}>
            <img src={prevArrow} alt="" />
          </button>
          <button className={"button news__main--btn news__main--next"}>
            <img src={nextArrow} alt="" />
          </button>
        </Slider>
      </div>
      <div className="news__bonus">
        <div className={"cashback"}>
          <div className="cashback__title">Кэшбэк с каждой покупки</div>
          <div className="cashback__img">
            <img src={cashback} alt="" />
          </div>
        </div>
        <div className={"feedback"}>
          <div className="feedback__title">
            <div className="feedback__title--stars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="feedback__title--desc">
              Оставьте отзыв и получи 5% скидку
            </div>
          </div>
          <div className="feedback__img">
            <img src={feedback} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
