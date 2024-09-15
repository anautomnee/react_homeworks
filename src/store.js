import { combineReducers } from "redux";
import QuoteReducer from "./features/quote/quoteSlice"
import { configureStore } from "@reduxjs/toolkit";

const mainReducer = combineReducers({
    quotes: QuoteReducer
})

export const store = configureStore({
    reducer: mainReducer
})