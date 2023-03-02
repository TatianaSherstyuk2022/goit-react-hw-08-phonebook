import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contacts/contactsSlice";
import { userReducer } from "./userSlice";


const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});

export const store = configureStore({
 reducer: rootReducer,
});

