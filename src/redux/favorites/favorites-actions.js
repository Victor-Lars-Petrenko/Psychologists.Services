export const addToFavorites = psychologistId => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: psychologistId,
  };
};
