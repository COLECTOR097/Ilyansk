import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Items, NewsItems } from "./types";

const initialState: Items = {
  items: [],
};

const news = createSlice({
  name: "news",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<NewsItems[]>) {
      state.items = action.payload;
    },
  },
});
export const { setItems } = news.actions;
export default news.reducer;
