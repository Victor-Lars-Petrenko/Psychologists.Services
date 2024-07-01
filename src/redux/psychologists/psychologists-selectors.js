export const selectPsychologists = state => state.psychologists.items;

export const selectPsychologistsLoading = state =>
  state.psychologists.isLoading;

export const selectPsychologistsError = state => state.psychologists.error;
