import React, { FC } from "react";

import { PaginationProps } from "./types";

import "./pagination.scss";

/**
 * The pagination with a static style. It can be 'true' or 'false'.
 *
 * @param slide
 * @param slidesLength
 * @param moveSlideLeft
 * @param moveSlideRight
 * @constructor
 */
const Pagination: FC<PaginationProps> = ({
  slide,
  slidesLength,
  moveSlideLeft,
  moveSlideRight,
}) => {
  const points = [];

  for (let i = 1; i <= slidesLength; i++) {
    points.push(i);
  }

  const moveSlideWithPag = (point: number) => {
    if (point > slide) {
      for (let i = 0; i < point - slide; i++) {
        moveSlideLeft();
      }
    } else if (point < slide) {
      for (let i = 0; i < slide - point; i++) {
        moveSlideRight();
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
