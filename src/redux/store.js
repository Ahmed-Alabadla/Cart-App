import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSlice";
import cartSlice from "./reducers/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
