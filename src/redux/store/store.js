import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import projectReducer from "../slices/projectSlice";

export const store = configureStore({
  reducer: {
    project: projectReducer,
  },
});

setupListeners(store.dispatch);
