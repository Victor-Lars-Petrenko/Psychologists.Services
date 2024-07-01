import { createSlice } from "@reduxjs/toolkit";
import {
  loadPsychologists,
  loadPsychologistsWithPagination,
  setFilter,
} from "./psychologists-operations";

const initialState = {
  psychologists: [],
  filter: {},
  pagination: {
    limit: 3,
    startAt: null,
  },
};

const psychologistSlice = createSlice({
  name: "psychologists",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadPsychologists.fulfilled, (state, action) => {
        state.psychologists = action.payload;
      })
      .addCase(loadPsychologistsWithPagination.fulfilled, (state, action) => {
        state.psychologists = action.payload;
      })
      .addCase(setFilter, (state, action) => {
        state.filter = action.payload;
      });
  },
});

export default psychologistSlice.reducer;
