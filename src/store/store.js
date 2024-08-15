import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./reducer";

export const hw14Store = configureStore({
  reducer: mainReducer,
});
