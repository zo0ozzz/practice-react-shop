import { configureStore, createSlice } from "@reduxjs/toolkit";
import { inCart } from "./store/inCartSlice";

const user = createSlice({
  name: "user",
  initialState: { name: "웅비", age: 30 },
  reducers: {
    setUser(state) {
      state.age++;
    },
  },
});

export let { setUser } = user.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    inCart: inCart.reducer,
  },
});
