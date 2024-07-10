import { createSlice } from "@reduxjs/toolkit";
import { setFilter } from "./filter-actions";

const initialState = {
  filter: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setFilter, (state, action) => {
      return action.payload;
    });
  },
});

export default filterSlice.reducer;
