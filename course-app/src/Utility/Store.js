import { configureStore } from "@reduxjs/toolkit";
import loggedUserSlice from './loggedUserSlice'
const store = configureStore({
  reducer: {
    loggedUserSlice: loggedUserSlice,
  },
});

export default store;
