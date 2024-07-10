import { createSlice } from "@reduxjs/toolkit";
import { toggleFavorite } from "./favorites-actions";

const initialState = {
  favoriteIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  extraReducers: builder => {
    builder.addCase(toggleFavorite, (state, action) => {
      const cardId = action.payload;
      if (state.favoriteIds.includes(cardId)) {
        state.favoriteIds = state.favoriteIds.filter(id => id !== cardId);
      } else {
        state.favoriteIds.push(cardId);
      }
    });
  },
});

export default favoritesSlice.reducer;
