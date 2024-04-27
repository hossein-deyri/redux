import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    showModal: (state, action) => {
      return !state;
    }
  }
});

const authModalReducer = authModalSlice.reducer;

export default authModalReducer;
export const { showModal } = authModalSlice.actions;
