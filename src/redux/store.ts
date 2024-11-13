import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../redux/slice/counterSlice'
import authReducer from "./slice/authSlice";
import themeReducer from "./slice/themeSlice";
import grantReducer from "./slice/grantSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    grant: grantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
