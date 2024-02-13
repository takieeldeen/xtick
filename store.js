import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./src/features/timer/timerSlice";
import tasksReducer from "./src/features/tasks/tasksSlice";
const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: tasksReducer,
  },
});
export default store;
