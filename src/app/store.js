import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser/currentUserSlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});
