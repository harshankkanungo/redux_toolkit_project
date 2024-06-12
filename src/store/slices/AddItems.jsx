import { createSlice } from "@reduxjs/toolkit";

let slice1 = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    Add_items(state, action) {
      state.push(action.payload);
    },
    remove_items(state, action) {
      state.splice(action.payload, 1);
    },
    clearremove(state, action) {
      return [];
    },
  },
});

export const { Add_items, remove_items, clearremove } = slice1.actions;
export default slice1.reducer;
