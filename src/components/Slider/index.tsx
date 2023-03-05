import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useState,
} from "react";

import { moveSlideLeft, moveSlideRight } from "./utils/sliderMove";

import "./slider.scss";

type Props = {
  children: JSX.Element | JSX.Element[];
  controllers: Record<string, string>;
};

const Slider: FC<Props> = ({ children, controllers }) => {
  const [slides, setSlides] = useState<ReactElement[]>([]);
  const [slide, setSlide] = useState<number>(1);
  const [moveButtons, setMoveButtons] = useState<ReactElement[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const slidesLength: number = slides.length;
  console.log(slides);

  useEffect(() => {
    setSlides(
      Children.map(children, (child) => {
        const childClass = child.props.className;

        switch (true) {
          case childClass.includes("slider__container"):
            return cloneElement(child, {
              style: {
                transform: `translateX(${offset}%)`,
              },
            });
          default:
            break;
        }
      })
    );

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
              onClick: () => moveSlideRight({ setOffset, setSlide }),
            });
          case childClass.includes(controllers.nextBtn):
            return cloneElement(child, {
              style: {
                opacity:
                  slides && slides[0].props.children.length === slide
                    ? "0.8"
                    : "",
              },
              disabled: slides && slides[0].props.children.length === slide,
              onClick: () =>
                moveSlideLeft({ setOffset, slidesLength, setSlide }),
            });
          default:
            break;
        }
      })
    );
  }, [slidesLength, offset]);

  return (
    <div className={"slider"}>
      <div className={"wrapper"}>{slides}</div>
      {moveButtons}
    </div>
  );
};

export default Slider;
