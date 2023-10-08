import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utilis/userSlice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
    },
});

export default appStore;