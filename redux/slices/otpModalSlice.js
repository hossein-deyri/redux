import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const otpModalSlice = createSlice({
  name: 'otpModal',
  initialState,
  reducers: {
    showOtpModal: (state, action) => {
      return action.payload;
    }
  }
});

const otpModalReducer = otpModalSlice.reducer;

export default otpModalReducer;
export const { showOtpModal } = otpModalSlice.actions;
