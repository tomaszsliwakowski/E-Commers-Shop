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
      const index = state.basket.findIndex(
        (el) => el.product.id === action.payload.product.id
      );
      const Oneproduct = state.basket.find(
        (el) => el.product.id === action.payload.product.id
      );
      if (index !== -1 && Oneproduct?.product.count) {
        state.basket.splice(index, 1, {
          product: {
            id: Oneproduct.product.id,
            name: Oneproduct.product.name,
            img: Oneproduct.product.img,
            price: Oneproduct.product.price,
            category: Oneproduct.product.category,
            producer: Oneproduct.product.producer,
            opinion: Oneproduct.product.opinion,
            count: Oneproduct.product.count + 1,
          },
        });
      } else {
        state.basket.push({
          product: action.payload.product,
        });
      }
    },
    UpdateBasket: (
      state,
      action: PayloadAction<{ BasketUpdate: { prodId: number; value: number } }>
    ) => {
      const index = state.basket.findIndex(
        (el) => el.product.id === action.payload.BasketUpdate.prodId
      );
      const Oneproduct = state.basket.find(
        (el) => el.product.id === action.payload.BasketUpdate.prodId
      );
      if (!Oneproduct?.product) return;
      state.basket.splice(index, 1, {
        product: {
          id: Oneproduct.product.id,
          name: Oneproduct.product.name,
          img: Oneproduct.product.img,
          price: Oneproduct.product.price,
          category: Oneproduct.product.category,
          producer: Oneproduct.product.producer,
          opinion: Oneproduct.product.opinion,
          count: action.payload.BasketUpdate.value,
        },
      });
    },
    ClearBasket: (
      state,
      action: PayloadAction<{ do: { remove: boolean } }>
    ) => {
      if (action.payload.do.remove) {
        state.basket = [];
      }
    },
    ClearProductBasket: (
      state,
      action: PayloadAction<{ BasketRemoveItem: { prodId: number } }>
    ) => {
      state.basket = state.basket.filter(
        (el) => el.product.id !== action.payload.BasketRemoveItem.prodId
      );
    },
  },
});

export default BasketSlice.reducer;
export const { AddToBasket, UpdateBasket, ClearBasket, ClearProductBasket } =
  BasketSlice.actions;
