import { createSlice } from "@reduxjs/toolkit";

const fetchStatuSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //false : PENDING AND true: DONE
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
      return state;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      return state;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
      return state;
    },
  },
});

export const fetchStatusActions = fetchStatuSlice.actions;

export default fetchStatuSlice;
