import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initiated: false,
  isTicking: false,
  session: "pomodoro",
  minuets: 30,
  seconds: 0,
  sessionNo: 1,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    initiate(state, action) {
      state.initiated = true;
      state.isTicking = true;
      state.session = "pomodoro";
      state.minuets = 30;
      state.seconds = 0;
      state.sessionNo = 1;
    },
    pause(state, action) {
      state.isTicking = false;
    },
    resume(state, action) {
      state.isTicking = true;
    },
    restart(state, action) {
      state.isTicking = false;
      state.minuets = initialState.minuets;
      state.seconds = initialState.seconds;
    },
    tick(state, action) {
      if (state.seconds === 0 && state.minuets > 0) {
        state.minuets--;
        state.seconds = 59;
      } else if (state.seconds === 0 && state.minuets === 0) {
        timerSlice.caseReducers.nextSession(state);
      } else {
        state.seconds--;
      }
    },
    nextSession(state, action) {
      if (state.session === "pomodoro") {
        state.session = "shortBreak";
      } else if (
        state.session === "shortBreak" ||
        state.session === "longBreak"
      ) {
        state.session = "pomodoro";
      }
    },
    switchSession(state, action) {
      state.session = action.payload;
    },
  },
});

export default timerSlice.reducer;
