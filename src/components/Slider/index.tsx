import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { SliderProps } from "./types";

import Pagination from "./Pagination";

import "./slider.scss";

/**
 * This a simple custom slider.
 *  Some of params are optional.
 *
 * @param children
 * @param spaceBtw optional
 * @param controllers optional
 * @param pagination optional
 * @param slidesView
 * @constructor
 */
const Slider: FC<SliderProps> = ({
  children,
  spaceBtw,
  controllers,
  pagination,
  slidesView,
}) => {
  const slideRef = useRef<HTMLElement>(null);

  const [slides, setSlides] = useState<ReactElement[]>([]);
  const [slideChangeButtons, setSlideChangeButtons] = useState<ReactElement[]>(
    []
  );

  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);

  const moveSlideLeft = useCallback(() => {
    const slidesLength: number = slides.length;
    const offsetWidth: number = slideRef.current
      ? slideRef.current?.offsetWidth
      : 0;
    const slidesPerView: number = slidesView ? slidesView : 0;
    const spaceBetween: number = spaceBtw ? spaceBtw : 0;

    setCurrentSlide((currentState): number => currentState + 1);
    setOffset((currentOffset: number): number => {
      const cor: number = (offsetWidth + spaceBetween) * (slidesPerView - 1);
      const newOffset: number = currentOffset - offsetWidth - spaceBetween;
      const maxOffset: number =
        -(offsetWidth + spaceBetween) * (slidesLength - 1) + cor;

      return Math.max(newOffset, maxOffset);
    });
  }, [spaceBtw, slides.length, slidesView]);

  const moveSlideRight = useCallback(() => {
    setCurrentSlide((currentState): number => currentState - 1);
    setOffset((currentOffset: number): number => {
      const newOffset =
        currentOffset +
        (slideRef.current ? slideRef.current?.offsetWidth : 100) +
        (spaceBtw ? spaceBtw : 0);
      return Math.min(newOffset, 0);
    });
  }, [spaceBtw, slidesView]);

  useEffect(() => {
    setSlides(
      Children.map(children, (child) => {
        const childClass = child.props.className;

        if (childClass.includes("slider__slide")) {
          return cloneElement(child, {
            ref: slideRef,
            style: {
              maxWidth: 100 + "%",
              mixWidth: 100 + "%",
            },
          });
        }
      })
    );
    if (controllers) {
      setSlideChangeButtons(
        Children.map(children, (child) => {
          const childClass = child.props.className;

          switch (true) {
            case childClass.includes(controllers.prevBtn):
              return cloneElement(child, {
                style: {
                  opacity: currentSlide === 1 ? "0.8" : "",
                },
                disabled: currentSlide === 1,
                onClick: moveSlideRight,
              });
            case childClass.includes(controllers.nextBtn):
              return cloneElement(child, {
                style: {
                  opacity: slides.length === currentSlide ? "0.8" : "",
                },
                disabled: slides.length === currentSlide,
                onClick: moveSlideLeft,
              });
            default:
              break;
          }
        })
      );
    }
  }, [
    children,
    slidesView,
    pagination,
    controllers,
    offset,
    spaceBtw,
    moveSlideLeft,
    moveSlideRight,
  ]);

  return (
    <div className={"slider"}>
      <div className={"slider__container"}>
        <div
          className={"slider__wrapper"}
          style={{ transform: `translateX(${offset}px`, gap: `${spaceBtw}px` }}
        >
          {slides}
        </div>
      </div>
      {slideChangeButtons}
      {pagination && (
        <Pagination
          slide={currentSlide}
          slidesLength={slides.length}
          moveSlideLeft={moveSlideLeft}
          moveSlideRight={moveSlideRight}
        />
      )}
    </div>
  );
};

export default Slider;
