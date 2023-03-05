const SLIDE_WIDTH: number = 100;

type Props = {
  setOffset: (a: (currentOffset: number) => number) => void;
  setSlide: (a: (currentNumber: number) => number) => void;
  slidesLength?: number;
};
export const moveSlideLeft = ({ setOffset, slidesLength, setSlide }: Props) => {
  setSlide((currentNumber) => currentNumber + 1);
  setOffset((currentOffset: number) => {
    const newOffset = currentOffset - SLIDE_WIDTH;
    const maxOffset = -(SLIDE_WIDTH * (slidesLength ? slidesLength + 1 : 0));
    return Math.max(newOffset, maxOffset);
  });
};

export const moveSlideRight = ({ setOffset, setSlide }: Props) => {
  setSlide((currentNumber) => currentNumber - 1);
  setOffset((currentOffset: number) => {
    const newOffset = currentOffset + SLIDE_WIDTH;
    return Math.min(newOffset, 0);
  });
};
