import { combineReducers, configureStore } from "@reduxjs/toolkit";

import findIpSlice from './findIpSlice';

const rootReducer = combineReducers({
  findIpSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});