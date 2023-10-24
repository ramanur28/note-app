import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import noteReducer from "./slices/noteSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    note: noteReducer,
  },
});
