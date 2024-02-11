import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initiated: false,
  isTicking: false,
  session: "pomodoro",
  minuets: 0,
  seconds: 30,
  sessionNo: 1,
  longBreakInterval: 2,
  longBreakduration: 15,
  shortBreakduration: 10,
  pomodoroDuration: 50,
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
    play(state, action) {
      state.isTicking = true;
    },
    toggle(state, action) {
      state.isTicking = !state.isTicking;
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
        if (state.sessionNo % state.longBreakInterval === 0) {
          state.session = "longBreak";
          state.seconds = initialState.longBreakduration;
        } else {
          state.session = "shortBreak";
          state.seconds = initialState.shortBreakduration;
        }
      } else if (
        state.session === "shortBreak" ||
        state.session === "longBreak"
      ) {
        state.seconds = 30;
        state.session = "pomodoro";
        state.sessionNo++;
      }
    },
    switchSession(state, action) {
      state.session = action.payload;
      if (action.payload === "pomodoro") {
        state.seconds = initialState.pomodoroDuration;
        state.sessionNo++;
      } else if (action.payload === "shortBreak") {
        state.seconds = initialState.shortBreakduration;
      } else if (action.payload === "longBreak") {
        state.seconds = initialState.longBreakduration;
      }
    },
  },
});

export const {
  initiate,
  play,
  pause,
  toggle,
  resume,
  restart,
  tick,
  nextSession,
  switchSession,
} = timerSlice.actions;

export default timerSlice.reducer;

export const getTime = (state) => state;
