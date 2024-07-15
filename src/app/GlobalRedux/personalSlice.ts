import { createSlice } from "@reduxjs/toolkit";

export interface PersoanlStates {
  cardNumberArray: string[];
  openNewCardModalBool: boolean;
  openNewAddressModalBool: boolean;
  openTimeOfDeliveryModalBool: boolean;
  openAddressOfDeliveryModalBool: boolean;
  selectedCardBool: boolean;
}

const initialState: PersoanlStates = {
  cardNumberArray: ["1234567890129012", "6666666666666666"],
  openNewCardModalBool: false,
  openNewAddressModalBool: false,
  openTimeOfDeliveryModalBool: false,
  openAddressOfDeliveryModalBool: false,
  selectedCardBool: false,
};

export const personalSlice = createSlice({
  name: "differFunc",
  initialState,
  reducers: {
    openNewCardModal(state) {
      state.openNewCardModalBool = true;
    },

    closeNewCardModal(state) {
      state.openNewCardModalBool = false;
    },

    selectedCard(state) {
      state.selectedCardBool = true;
    },

    addNewCard(state, action) {
      const cardNumber = action.payload;
      state.cardNumberArray = [...state.cardNumberArray, cardNumber];
    },

    removeCard(state, action) {
      const cardNumber = action.payload;
      const updateArray = state.cardNumberArray.filter((number) => {
        return number !== cardNumber;
      });

      state.cardNumberArray = updateArray;
    },

    openNewAddressModal(state) {
      state.openNewAddressModalBool = true;
    },

    closeNewAddressModal(state) {
      state.openNewAddressModalBool = false;
    },

    openTimeOfDeliveryModal(state) {
      state.openTimeOfDeliveryModalBool = true;
    },

    closeTimeOfDeliveryModal(state) {
      state.openTimeOfDeliveryModalBool = false;
    },
    openAddressOfDeliveryModal(state) {
      state.openAddressOfDeliveryModalBool = true;
    },

    closeAddressOfDeliveryModal(state) {
      state.openAddressOfDeliveryModalBool = false;
    },
  },
});

export const personalActions = personalSlice.actions;
export default personalSlice.reducer;
