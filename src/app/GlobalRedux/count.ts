import { ProductModel } from "@/components/module/product";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginStates {
  quantity: number;
  updateProduct: ProductModel | null;
  cartItemsquantity: number;
  commonPrice: number;
  cartArray: ProductModel[];
  cartProdIdArray: number[];
  orderBool: boolean;
}

const initialState: LoginStates = {
  quantity: 1,
  updateProduct: null,
  cartItemsquantity: 0,
  commonPrice: 0,
  cartArray: [],
  cartProdIdArray: [],
  orderBool: false,
};

export const countSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    loseProductQuantity(state) {
      state.quantity = 1;
    },

    decrementProductQuantity(state) {
      if (state.quantity > 1) {
        state.quantity = state.quantity - 1;
      }
    },

    incrementProductQuantity(state) {
      state.quantity = state.quantity + 1;
    },

    decrementProductQuantityInCart(state, action) {
      let product = action.payload;
      if (product.quantity > 1) {
        let updateProduct = {
          ...product,
          quantity: product.quantity - 1,
        };
        const existingCartItemIndex = state.cartArray.findIndex((item) => {
          return item.id === product.id;
        });
        state.commonPrice -= product.currPrice;
        state.cartArray[existingCartItemIndex] = updateProduct;
      }
    },

    incrementProductQuantityInCart(state, action) {
      let product = action.payload;
      let updateProduct = {
        ...product,
        quantity: product.quantity + 1,
      };
      const existingCartItemIndex = state.cartArray.findIndex((item) => {
        return item.id === product.id;
      });
      state.commonPrice += product.currPrice;
      state.cartArray[existingCartItemIndex] = updateProduct;
    },

    addToCart(state, action) {
      let product = action.payload;

      if (
        state.cartArray.length === 0 ||
        !state.cartProdIdArray.includes(product.id)
      ) {
        state.cartArray = [
          ...state.cartArray,
          { ...product, quantity: state.quantity },
        ];
        state.cartProdIdArray = [...state.cartProdIdArray, product.id];
        state.commonPrice =
          state.commonPrice + state.quantity * product.currPrice;
        state.cartItemsquantity = state.cartProdIdArray.length;
      } else {
        let updateProduct = {
          ...product,
          quantity: state.quantity,
        };
        const existingCartItemIndex = state.cartArray.findIndex((item) => {
          return item.id === product.id;
        });
        state.commonPrice =
          state.commonPrice -
          state.cartArray[existingCartItemIndex].quantity *
            state.cartArray[existingCartItemIndex].currPrice +
          state.quantity * product.currPrice;
        state.cartArray[existingCartItemIndex] = updateProduct;
      }
    },

    removeFromCart(state, action) {
      const product = action.payload;
      const existingCartProductIndex = state.cartArray.findIndex((prod) => {
        return prod.id === product.id;
      });
      const filterProductId = state.cartProdIdArray.filter((id) => {
        return id !== product.id;
      });
      state.cartProdIdArray = filterProductId;
      state.cartItemsquantity = state.cartProdIdArray.length;
      state.commonPrice -= product.currPrice * product.quantity;
      const updateCartArray = [...state.cartArray];
      updateCartArray.splice(existingCartProductIndex, 1);
      state.cartArray = updateCartArray;
    },

    order(state, action) {
      const logedInBool = action.payload;
      if (logedInBool && state.cartProdIdArray.length) {
        state.orderBool = true;
      }
    },

    confirmOrder(state) {
      if (state.orderBool === true) {
        location.href = "/";
      }
    },
  },
});

export const countActions = countSlice.actions;
export default countSlice.reducer;
