import { createSelector } from "@reduxjs/toolkit";
import { selectPsychologists } from "../psychologists/psychologists-selectors";

export const selectFavoriteIds = state => state.favorites.favoriteIds;

export const selectFavoritePsychologists = createSelector(
  [selectFavoriteIds, selectPsychologists],
  (favoriteIds, psychologists) => {
    return psychologists.filter(({ _id }) => favoriteIds.includes(_id));
  }
);

export const makeSelectorCardFavorite = () => {
  return createSelector(
    [selectFavoriteIds, (state, cardId) => cardId],
    (favoriteIds, cardId) => {
      return favoriteIds.includes(cardId);
    }
  );
};
