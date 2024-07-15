import { createSlice } from "@reduxjs/toolkit";

export interface LoginStates {
  openLoginModalBool: boolean;
  openCodeFieldBool: boolean;
  phoneNumber: number | null;
  codeArray: number[];
  verificationCode: string | undefined;
  verified: boolean;
  logedInBool: boolean;
  checkedBool: boolean;
}

const initialState: LoginStates = {
  openLoginModalBool: false,
  openCodeFieldBool: false,
  phoneNumber: null,
  codeArray: [],
  verificationCode: undefined,
  verified: false,
  logedInBool: false,
  checkedBool: false,
};

export const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    openLoginModal(state) {
      state.openLoginModalBool = true;
    },

    closeLoginModal(state) {
      state.codeArray = [];
      state.openLoginModalBool = false;
      state.openCodeFieldBool = false;
    },

    openCodeField(state, action) {
      state.openCodeFieldBool = true;
      state.phoneNumber =action.payload;
    },

    codeGenerator(state) {
      while (state.codeArray.length < 4) {
        const randomNumber: number = Math.round(Math.random() * 9);
        state.codeArray = [...state.codeArray, randomNumber];
      }
      let arrayToString: string = "";
      state.codeArray.map((item) => {
        arrayToString += item;
      });
      state.verificationCode = arrayToString;
    },

    logedIn(state) {
      state.logedInBool = true;

    },
    logedOut(state) {
      state.logedInBool = false;
    },

    checked(state) {
      state.checkedBool = !state.checkedBool;
    },
  },
});

export const loginActions = loginSlice.actions;
export default loginSlice.reducer;
