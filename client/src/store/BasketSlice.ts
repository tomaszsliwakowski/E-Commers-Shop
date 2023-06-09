import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsType } from "../types/Types";

const initialState: { basket: Array<{ product: ProductsType }> } = {
  basket: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddToBasket: (state, action: PayloadAction<{ product: ProductsType }>) => {
      state.basket.push({
        product: action.payload.product,
      });
    },
    UpdateBasket: (
      state,
      action: PayloadAction<{ BasketUpdate: Array<{ product: ProductsType }> }>
    ) => {
      state.basket = action.payload.BasketUpdate;
    },
  },
});

export default BasketSlice.reducer;
export const { AddToBasket, UpdateBasket } = BasketSlice.actions;
