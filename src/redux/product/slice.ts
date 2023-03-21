import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Product, Products } from "./types";

const initialState: Products = {
  products: [],
};

const product = createSlice({
  name: "news",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = product.actions;
export default product.reducer;
