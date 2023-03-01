import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userReducer } from "./userSlice";
// import { filterReducer } from "./filterSlice";


const rootReducer = combineReducers({
  user: userReducer,
  // contacts: contactReducer,
});

export const store = configureStore({
 reducer: rootReducer,

});

