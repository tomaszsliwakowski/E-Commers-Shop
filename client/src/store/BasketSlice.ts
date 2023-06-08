import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  basket: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddToBasket: (state, action: PayloadAction<{ product: any }>) => {
      state.basket.push({
        product: action.payload.product,
      });
    },
  },
});

export default BasketSlice.reducer;
export const { AddToBasket } = BasketSlice.actions;
