import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/Types";

const initialState: { basket: Array<{ product: ProductType }> } = {
  basket: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    AddToBasket: (state, action: PayloadAction<{ product: ProductType }>) => {
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
    AddToBasketPc: (state, action: PayloadAction<ProductType[]>) => {
      action.payload.map((item) =>
        state.basket.push({
          product: {
            id: item.id,
            name: item.name,
            img: item.img,
            price: item.price,
            category: item.category,
            producer: item.producer,
            opinion: item.opinion,
            count: 1,
          },
        })
      );
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
export const {
  AddToBasket,
  UpdateBasket,
  ClearBasket,
  ClearProductBasket,
  AddToBasketPc,
} = BasketSlice.actions;
