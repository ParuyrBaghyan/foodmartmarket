import { ProductModel } from "@/components/module/product";
import { createSlice } from "@reduxjs/toolkit";

export interface FavouriteStates {
  favouriteArray: ProductModel[];
  favouriteIdArray: number[];
  checkHeartConditionBool: boolean;
}

const initialState: FavouriteStates = {
  favouriteArray: [],
  favouriteIdArray: [],
  checkHeartConditionBool: false,
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite(state, action) {
      const product = action.payload;
      if (
        !state.favouriteIdArray.length ||
        !state.favouriteIdArray.includes(product.id)
      )
        state.favouriteArray = [...state.favouriteArray, product];
      state.favouriteIdArray = [...state.favouriteIdArray, product.id];
    },
    removeFromFavourite(state,action){
        const product = action.payload
        const existingCartProductIndex = state.favouriteArray.findIndex((prod) => {
            return prod.id === product.id;
          });
          const filterProductId = state.favouriteIdArray.filter((id) => {
            return id !== product.id;
          });
          state.favouriteIdArray = filterProductId
          const updatefavouriteArray = [...state.favouriteArray];
          updatefavouriteArray.splice(existingCartProductIndex, 1);
          state.favouriteArray = updatefavouriteArray;
    },
  },
});

export const favouriteActions = favouriteSlice.actions;
export default favouriteSlice.reducer;
