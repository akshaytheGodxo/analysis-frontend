import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  isDarkMode: boolean;
}

// Initial state without accessing localStorage directly
const initialState: ThemeState = {
  isDarkMode: true, // Default value (will be updated on the client)
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    initializeTheme: (state) => {
      // This action is to be dispatched on the client side
      if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('isDarkMode');
        state.isDarkMode = storedTheme === 'true';
      }
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isDarkMode', state.isDarkMode.toString());
      }
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isDarkMode', action.payload.toString());
      }
    },
  },
});

export const { initializeTheme, toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
