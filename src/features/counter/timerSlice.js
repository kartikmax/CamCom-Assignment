import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 0,
  isPaused: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    togglePause: (state) => {
      state.isPaused = !state.isPaused;
    },
    incrementTime: (state) => {
      if (!state.isPaused) {
        state.time += 1;
      }
    },
    resetTime: (state) => {
      state.time = 0;
    },
  },
});

export const { togglePause, incrementTime, resetTime } = timerSlice.actions;

export default timerSlice.reducer;
