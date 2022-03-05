import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";

const updateCountry = createAction("updateCountry");

export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async () => {
    const res = await fetch("https://restcountries.com/v3.1/name/peru");
    const data = await res.json();
    const {
      name: { common },
    } = data[0];
    return { common };
  }
);

const initialState = {
  country: {
    name: "colombia",
    capital: "bogota",
    languages: ["español", "quechua"],
    population: 50000000,
  },
  status: "idle",
  error: null,
};

const countrySlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountry.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.country.name = action.payload.common;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCountry, (state, action) => {
        console.log({ action });
      });
  },
});

export default countrySlice.reducer;
