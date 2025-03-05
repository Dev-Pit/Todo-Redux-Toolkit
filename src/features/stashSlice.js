import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const stashSlice = createSlice({
  name: "stash",
  initialState,
  reducers: {
    holdStash: (state, action) => {
      state.id = action.payload.id;
      state.text = action.payload.text;
    },
    clearStash: () => {
      return {};
    },
  },
});

export const { holdStash, clearStash } = stashSlice.actions;
export default stashSlice.reducer;
