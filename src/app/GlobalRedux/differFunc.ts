"use client";
import { ProductModel } from "@/components/module/product";
import { createSlice } from "@reduxjs/toolkit";

export interface DifferentStates {
  fixedHeader: boolean;
  fixedOrderBox: boolean;
  openCatalogBool: boolean;
  openUserDropDownBool: boolean;
  markHeartBool: boolean;
  product: ProductModel;

  choseQuantityTypeBool: boolean;
}

const initialState: DifferentStates = {
  fixedHeader: false,
  fixedOrderBox: false,
  openCatalogBool: false,
  openUserDropDownBool: false,
  markHeartBool: false,
  product: {
    id: 0,
    name: "",
    lastPrice: 0,
    currPrice: 0,
    quantity: 0,
    description: "",
    image: "",
    weight: 0,
    data: 0
  },

  choseQuantityTypeBool: false,
};

export const differFuncSlice = createSlice({
  name: "differFunc",
  initialState,
  reducers: {
    fixWhileScrollHeader(state) {
      if (window.scrollY > 36) {
        state.fixedHeader = true;
      } else {
        state.fixedHeader = false;
      }
    },
    fixWhileScrollOrderBox(state) {
      if (window.scrollY > 100) {
        state.fixedOrderBox = true;
      } else {
        state.fixedOrderBox = false;
      }
    },

    openCatalog(state) {
      state.openCatalogBool = !state.openCatalogBool;
    },

    closeCatalog(state) {
      state.openCatalogBool = false;
    },

    openUserDropDown(state) {
      state.openUserDropDownBool = !state.openUserDropDownBool;
    },

    passProduct(state, action) {
      state.product = action.payload;
    },

    choseQuantityType(state, action) {
      state.choseQuantityTypeBool = action.payload;
    },
  },
});

export const differFuncActions = differFuncSlice.actions;
export default differFuncSlice.reducer;
