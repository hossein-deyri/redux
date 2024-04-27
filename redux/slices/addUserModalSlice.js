import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const addUserModalSlice = createSlice({
  name: 'addUserModal',
  initialState,
  reducers: {
    showAddUserModal: (state, action) => {
      return action.payload;

    }
  }
});

const addUserModalReducer = addUserModalSlice.reducer;

export default addUserModalReducer;
export const { showAddUserModal } = addUserModalSlice.actions;
