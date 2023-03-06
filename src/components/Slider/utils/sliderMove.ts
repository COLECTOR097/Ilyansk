const SLIDE_WIDTH: number = 100;

type Props = {
  setOffset: (a: (currentOffset: number) => number) => void;
  setSlide: (a: (currentNumber: number) => number) => void;
  slidesLength?: number;
  spaceBtw?: number;
};
export const moveSlideLeft = ({
  spaceBtw,
  setOffset,
  slidesLength,
  setSlide,
}: Props) => {
  setSlide((currentNumber) => currentNumber + 1);
  setOffset((currentOffset: number) => {
    const newOffset = currentOffset - SLIDE_WIDTH - (spaceBtw ? spaceBtw : 0);
    const maxOffset = -(
      (SLIDE_WIDTH + (spaceBtw ? spaceBtw : 0)) *
      (slidesLength ? slidesLength - 1 : 0)
    );
    return Math.max(newOffset, maxOffset);
  });
};

export const moveSlideRight = ({ spaceBtw, setOffset, setSlide }: Props) => {
  setSlide((currentNumber) => currentNumber - 1);
  setOffset((currentOffset: number) => {
    const newOffset = currentOffset + SLIDE_WIDTH + (spaceBtw ? spaceBtw : 0);
    return Math.min(newOffset, 0);
  });
};
