import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./reducers";

export const hw13Store = configureStore({
  reducer: mainReducer,
});
