import { createSlice } from "@reduxjs/toolkit";
//import { Action } from "@remix-run/router";

//def initial state
const initialState = {
  theme: JSON.parse(window?.localStorage.getItem("theme")) ?? "dark",
};

//for manage the theme state
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    //reducer to set theme
    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem("theme", JSON.stringify(action.payload));
    },
  },
});
export default themeSlice.reducer;

//to dispatch the set theme action
export function setTheme(value) {
  return (dispatch) => {
    dispatch(themeSlice.actions.setTheme(value));
  };
}
