import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteToCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    cleanCart: (state, action) => {
      return [];
    },

    increaseQuantity: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findProduct.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct.quantity >= 2) {
        findProduct.quantity -= 1;
      } else {
        return state.filter((product) => product.id !== action.payload.id);
      }
    },
  },
});
export const {
  addToCart,
  deleteToCart,
  cleanCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
