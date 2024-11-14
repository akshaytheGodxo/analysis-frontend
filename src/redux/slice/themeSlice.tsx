// src/redux/slice/themeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

// Function to get the initial theme state from localStorage
const getInitialTheme = (): boolean => {
  if (typeof window !== "undefined") {
    // Access localStorage only if we're on the client
    return localStorage.getItem("isDarkMode") === "true";
  }
  return false; // default to light mode if localStorage is not available
};

const initialState: ThemeState = {
  isDarkMode: getInitialTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Persist theme in localStorage on the client side
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", state.isDarkMode.toString());
      }
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      // Persist theme in localStorage on the client side
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", action.payload.toString());
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
