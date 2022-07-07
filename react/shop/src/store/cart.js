import { createSlice } from "@reduxjs/toolkit";

const initialCartState = [
  { id: 0, name: "white and Black", count: 2 },
  { id: 2, name: "Grey Yordan", count: 1 },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addCount(state, action) {
      let id = state.findIndex((cart)=>{return cart.id === action.payload})
      state[id].count++;
    },
    addCart(state, action){
      console.log(action.payload)
      state.push(action.payload);
    }
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;