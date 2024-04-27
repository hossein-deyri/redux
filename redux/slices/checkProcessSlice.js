import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const checkProcessSlice = createSlice({
  name: 'checkProcess',
  initialState,
  reducers: {
    inProcess: (state, action) => {
      return !state;
    }
  }
});

const checkProcessReducer = checkProcessSlice.reducer;

export default checkProcessReducer;
export const { inProcess } = checkProcessSlice.actions;
