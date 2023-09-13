import { createSlice } from "@reduxjs/toolkit";

export const toggleReducer = createSlice({
  name: "stateToggle",
  initialState: {
    toggle: false,
  },
  reducers: {
      openToggle: (state, action) => {
          state.toggle = action.payload;
    }
},
});


export const { openToggle, closeToggle } = toggleReducer.actions;

export default toggleReducer.reducer;
