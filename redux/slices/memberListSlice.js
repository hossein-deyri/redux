import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    storeMembers: (state, action) => {
      return action.payload;
    }
  }
});

const membersReducer = membersSlice.reducer;

export default membersReducer;
export const { storeMembers } = membersSlice.actions;