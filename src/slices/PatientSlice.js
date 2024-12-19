import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, 
  isLoggedIn: false, 
};

const patientSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    saveFormData: (state, action) => {
        state.user = { ...state.user, ...action.payload }; 
      },
    clearUser(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    resetData: () => initialState,
  },
});

// Export actions
export const { setUser,saveFormData, clearUser, resetData } = patientSlice.actions;

// Export reducer
export default patientSlice.reducer;
