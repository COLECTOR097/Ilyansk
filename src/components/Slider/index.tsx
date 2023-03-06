import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useState,
} from "react";

import Pagination from "./Pagination";
import { moveSlideLeft, moveSlideRight } from "./utils/sliderMove";

import "./slider.scss";

type Props = {
  children?: JSX.Element | JSX.Element[];
  controllers?: Record<string, string>;
  pagination?: boolean;
  spaceBtw?: number;
};
const Slider: FC<Props> = ({ children, spaceBtw, controllers, pagination }) => {
  const [slides, setSlides] = useState<ReactElement[]>([]);
  const [slide, setSlide] = useState<number>(1);
  const [moveButtons, setMoveButtons] = useState<ReactElement[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const slidesLength: number =
    slides.length >= 1 ? slides[0].props.children.length : 0;

  useEffect(() => {
    if (children) {
      setSlides(
        Children.map(children, (child) => {
          const childClass = child.props.className;

          switch (true) {
            case childClass.includes("slider__container"):
              return cloneElement(child, {
                style: {
                  gap: `${spaceBtw}%`,
                  transform: `translateX(${offset}%)`,
                },
              });
            default:
              break;
          }
        })
      );
      if (controllers) {
        setMoveButtons(
          Children.map(children, (child) => {
            const childClass = child.props.className;

            switch (true) {
              case childClass.includes(controllers.prevBtn):
                return cloneElement(child, {
                  style: {
                    opacity: slide === 1 ? "0.8" : "",
                  },
                  disabled: slide === 1,
                  onClick: () =>
                    moveSlideRight({ spaceBtw, setOffset, setSlide }),
                });
              case childClass.includes(controllers.nextBtn):
                return cloneElement(child, {
                  style: {
                    opacity: slidesLength === slide ? "0.8" : "",
                  },
                  disabled: slidesLength === slide,
                  onClick: () =>
                    moveSlideLeft({
                      spaceBtw,
                      setOffset,
                      slidesLength,
                      setSlide,
                    }),
                });
              case pagination:
                return (
                  <Pagination
                    spaceBtw={spaceBtw}
                    slide={slide}
                    setOffset={setOffset}
                    setSlide={setSlide}
                    slidesLength={slidesLength}
                  />
                );
              default:
                break;
            }
          })
        );
      }
    }
  }, [
    children,
    setMoveButtons,
    Pagination,
    pagination,
    controllers,
    slide,
    slidesLength,
    offset,
  ]);

  return (
    <div className={"slider"}>
      <div className={"wrapper"}>{slides}</div>
      {moveButtons}
    </div>
  );
};

export default Slider;
