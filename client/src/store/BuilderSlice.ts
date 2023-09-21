import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ConfiguratorDataType } from "../components/Configurator/configurator";

const initialState: { builder: ConfiguratorDataType[] } = {
  builder: [],
};

export const BuilderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    AddToBasket: (state, action: PayloadAction<ConfiguratorDataType[]>) => {
      state.builder = action.payload;
    },
  },
});

export default BuilderSlice.reducer;
export const { AddToBasket } = BuilderSlice.actions;
