import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "../../utilis/helpers";

const stateExample = {
  title: "Working on state Management",
  description: "Implementing state management using redux and redux-persist",
  duration: 2,
  state: "doing",
  id: 6210939,
  project: "xtick",
  category: "state management",
};
// {
//   title: "Working on state Management",
//   description:
//     "Implementing state management using redux and redux-persist",
//   duration: 2,
//   state: "doing",
//   id: 6210939,
//   project: "xtick",
//   category: "state management",
// },
const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask(state, action) {
      //Payload suppose to be a task object
      action.payload.id = generateId();
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {
      //payload suppose to be an id
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask(state, action) {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      const obj = { ...state.tasks[index] };
      state.tasks[index] = { ...obj, ...action.payload };
    },
    finishTask(state, action) {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].state = "done";
    },
  },
});
export const { createTask, deleteTask, updateTask, finishTask } =
  tasksSlice.actions;
export const getCurrentTask = (state) => {
  return state.tasks?.tasks?.find((task) => task.state === "doing");
};
export const getRequiredTaskIndex = 0;
export default tasksSlice.reducer;
