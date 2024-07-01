import { createAsyncThunk } from "@reduxjs/toolkit";
import { firebaseDatabase } from "../../firebaseConfig";

export const loadPsychologists = createAsyncThunk(
  "psychologists/loadPsychologists",
  async () => {
    const snapshot = await firebaseDatabase.ref("/psychologists").once("value");
    return snapshot.val();
  }
);

export const loadPsychologistsWithPagination = createAsyncThunk(
  "psychologists/loadPsychologistsWithPagination",
  async ({ limit, startAt }) => {
    let query = firebaseDatabase.ref("/psychologists").limitToFirst(limit);
    if (startAt) {
      query = query.startAt(startAt);
    }
    const snapshot = await query.once("value");
    return snapshot.val();
  }
);

export const setFilter = filter => ({
  type: "psychologists/setFilter",
  payload: filter,
});
