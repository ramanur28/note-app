import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    data: {},
  },
  reducers: {
    push: (state, action) => {
      state.data = action.payload;
    },
    add: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { push, add } = noteSlice.actions;
export default noteSlice.reducer;
