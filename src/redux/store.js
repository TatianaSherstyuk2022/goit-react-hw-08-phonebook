import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { contactsReducer } from "./contactsSlice";
import { userReducer } from "./userSlice";
// import { filterReducer } from "./filterSlice";


const rootReducer = combineReducers({
  user: userReducer,
  contactData: contactsReducer,
});

export const store = configureStore({
 reducer: rootReducer,

});

