import { ReactElement } from "react";

export type SliderProps = {
  children: ReactElement[];
  controllers?: Record<string, string>;
  pagination?: boolean;
  spaceBtw?: number;
  slidesView?: number;
};

export type PaginationProps = {
  slide: number;
  slidesLength: number;
  moveSlideLeft: () => void;
  moveSlideRight: () => void;
};
