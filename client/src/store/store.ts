import { configureStore } from "@reduxjs/toolkit";
import { BasketSlice } from "./BasketSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { BuilderSlice } from "./BuilderSlice";

export const store = configureStore({
  reducer: {
    basket: BasketSlice.reducer,
    builder: BuilderSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
