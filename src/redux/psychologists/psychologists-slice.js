import { createSlice } from "@reduxjs/toolkit";
import { loadPsychologists } from "./psychologists-operations";
import { pending, rejected } from "../../assets/functions/redux";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const psychologistSlice = createSlice({
  name: "psychologists",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loadPsychologists.pending, pending)
      .addCase(loadPsychologists.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(loadPsychologists.rejected, rejected);
  },
});

export default psychologistSlice.reducer;
