/* eslint-disable no-param-reassign */
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import clients from "./clients/clientSlice";

const rootReducer = combineReducers({
  clients,
});

const reducer = (state, action) => {
  return rootReducer(state, action);
};

const store = configureStore({ reducer });

export default store;
