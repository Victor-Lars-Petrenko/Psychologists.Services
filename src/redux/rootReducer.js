import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import psychologistsReducer from "./psychologists/psychologists-slice";
import filterReducer from "./filter/filter-slice";
import favoritesReducer from "./favorites/favorites-slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoriteIds"],
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer
);

const rootReducer = combineReducers({
  psychologists: psychologistsReducer,
  favorites: persistedFavoritesReducer,
  filter: filterReducer,
});

export default rootReducer;
