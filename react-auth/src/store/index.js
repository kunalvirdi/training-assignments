import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./authSlice.js";
import actionSlice from "./actionSlice.js";
export const store=configureStore({
	reducer:{mode:authSlice.reducer,action:actionSlice.reducer}
})