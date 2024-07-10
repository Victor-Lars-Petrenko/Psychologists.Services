import { createAsyncThunk } from "@reduxjs/toolkit";
import firebaseDatabase from "../../api/firebaseConfig";

export const loadPsychologists = createAsyncThunk(
  "psychologists/loadPsychologists",
  async (_, { rejectWithValue }) => {
    try {
      const snapshot = await firebaseDatabase
        .ref("/psychologists")
        .once("value");
      return snapshot.val();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadPsychologistsWithPagination = createAsyncThunk(
  "psychologists/loadPsychologistsWithPagination",
  async ({ limit, startAt }, { rejectWithValue }) => {
    try {
      let query = firebaseDatabase.ref("/psychologists").limitToFirst(limit);
      if (startAt) {
        query = query.startAt(startAt);
      }
      const snapshot = await query.once("value");
      return snapshot.val();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
