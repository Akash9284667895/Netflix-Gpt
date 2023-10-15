import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch; // Fix the typo here
    },
  },
});

export const { toggleSearchView } = gptSlice.actions;

export default gptSlice.reducer;
