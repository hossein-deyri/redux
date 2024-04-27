import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    storeMovies: (state, action) => {
      return action.payload;
    }
  }
});

const moviesReducer = moviesSlice.reducer;

export default moviesReducer;
export const { storeMovies } = moviesSlice.actions;
