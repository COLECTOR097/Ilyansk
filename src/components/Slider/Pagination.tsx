import React, { FC } from "react";

import "./pagination.scss";
import { moveSlideLeft, moveSlideRight } from "./utils/sliderMove";

type PaginationProps = {
  setOffset: (a: (currentOffset: number) => number) => void;
  setSlide: (a: (currentNumber: number) => number) => void;
  slide: number;
  slidesLength: number;
  spaceBtw?: number;
};
const Pagination: FC<PaginationProps> = ({
  spaceBtw,
  slide,
  setOffset,
  setSlide,
  slidesLength,
}) => {
  const points = [];

  for (let i = 1; i <= slidesLength; i++) {
    points.push(i);
  }

  const moveSlideWithPag = (point: number) => {
    if (point > slide) {
      for (let i = 0; i < point - slide; i++) {
        moveSlideLeft({ spaceBtw, setSlide, setOffset, slidesLength });
      }
    } else if (point < slide) {
      for (let i = 0; i < slide - point; i++) {
        moveSlideRight({ spaceBtw, setSlide, setOffset });
      }
    } else {
      return false;
    }
  };

  return (
    <div className={"pagination"}>
      {points.map((point) => {
        return (
          <div
            key={point}
            onClick={() => moveSlideWithPag(point)}
            className={`point ${slide === point ? "current" : ""}`}
          ></div>
        );
      })}
    </div>
  );
};

export default Pagination;
