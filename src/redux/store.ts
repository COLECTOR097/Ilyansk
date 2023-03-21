import { configureStore } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { useDispatch } from "react-redux";

import newsSlider from "./news/slice";
import products from "./product/slice";

export const store: ToolkitStore = configureStore({
  reducer: {
    newsSlider,
    products,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
