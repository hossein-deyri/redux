import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const menusSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    storeMenus: (state, action) => {
      return action.payload;
    }
  }
});

const menusReducer = menusSlice.reducer;

export default menusReducer;
export const { storeMenus } = menusSlice.actions;
