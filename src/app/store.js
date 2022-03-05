import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser/currentUserSlice";
import countryReducer from "../features/Country/countrySlice";

export const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    country: countryReducer,
  },
});
