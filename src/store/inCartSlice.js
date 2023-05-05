import { createSlice } from "@reduxjs/toolkit";

const inCart = createSlice({
  name: "inCart",
  initialState: [
    { id: 0, name: "시루0", count: 2 },
    { id: 2, name: "시루2", count: 1 },
  ],
  reducers: {
    increaseCount(state, p) {
      const pp = p.payload;

      const findItem = state.find(({ id }) => id == pp);

      findItem.count++;
    },

    decreaseCount(state, p) {
      const pp = p.payload;

      const findItem = state.find(({ id }) => id == pp);

      findItem.count--;
    },

    deleteProuduct(state, p) {
      const pp = p.payload;

      const findIndex = state.findIndex(({ id }) => id == pp);

      state.splice(findIndex, 1);
    },

    plusProductInCart(state, p) {
      const pp = p.payload;

      const isInCartIndex = state.findIndex(({ id }) => id === pp.id);

      if (isInCartIndex === -1) {
        state.push(pp);
      } else {
        state[isInCartIndex].count += pp.count;
      }
    },
  },
});

export let { increaseCount, decreaseCount, deleteProuduct, plusProductInCart } =
  inCart.actions;

export { inCart };
