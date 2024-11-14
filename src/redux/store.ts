import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice/themeSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Placeholder reducers
const placeholderReducer1 = (state = {}, action: any) => state;
const placeholderReducer2 = (state = {}, action: any) => state;

const rootReducer = combineReducers({
  theme: themeReducer,
  placeholder1: placeholderReducer1,
  placeholder2: placeholderReducer2,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
