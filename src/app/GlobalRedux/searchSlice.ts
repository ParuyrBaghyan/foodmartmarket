"use client";
import { ProductModel } from "@/components/module/product";
import { dummyProducts } from "@/utils/listOfProds";
import { createSlice } from "@reduxjs/toolkit";

export interface SearchtStates {
  foundProductsArray: ProductModel[];
  openSearchBool: boolean;
  onSearchBool: boolean;
}

const initialState: SearchtStates = {
  foundProductsArray: [],
  openSearchBool: false,
  onSearchBool: false,
};

export const searchSlice = createSlice({
  name: "differFunc",
  initialState,
  reducers: {
    openSearch(state) {
      state.openSearchBool = !state.openSearchBool;
    },

    closeSearch(state) {
      state.openSearchBool = false;
    },

    onSearch(state, action) {
      if (action.payload !== "") {
        state.onSearchBool = true;
        state.foundProductsArray = dummyProducts.filter((prod) => {
            return prod.name.startsWith(action.payload)
        })
      } else {
        state.onSearchBool = false;
      }
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
