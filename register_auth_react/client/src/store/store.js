import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import { checkTokenExpiration } from "../middlewares/checkTokenExpiration";

export const store = configureStore({
    reducer: {auth: auth},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(checkTokenExpiration)
})