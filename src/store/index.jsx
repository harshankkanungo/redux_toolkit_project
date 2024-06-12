import { configureStore } from "@reduxjs/toolkit";
import  slice1  from "./slices/AddItems";


let store = configureStore({
  reducer: {
    users: slice1,
  },
});
export default store;
