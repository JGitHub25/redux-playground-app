import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Pepo",
  lastName: "Gómez",
  age: 32,
  type: "premium",
  wishlistIDs: [1, 4],
  interestingCategories: ["electronics", "jewelery", "men's clothing"],
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    testAction(state, action) {
      return {
        ...state,
        age: 56,
      };
    },
  },
});

export default currentUserSlice.reducer;
export const { testAction } = currentUserSlice.actions;
