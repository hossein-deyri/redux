import { userToken } from '@/utilize/token';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  subInfo: {}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSubInfo: (state, action) => {
      state.subInfo = action.payload;
    },
    login: (state, action) => {
      return { ...state, isLoggedIn: true };
    },
    logOut: (state, action) => {
      userToken.delete();
      return { ...state, isLoggedIn: false };
    }
  }
});

const userReducer = userSlice.reducer;

export default userReducer;
export const { login, logOut, setSubInfo } = userSlice.actions;
