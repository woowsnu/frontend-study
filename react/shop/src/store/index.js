import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import cartReducer from "./cart";

const store = configureStore({
  reducer: { cart: cartReducer, auth: authReducer },
});

export default store;
