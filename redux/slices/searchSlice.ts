import { ISearchState } from '@/ts/models/SearchState';
import { createSlice } from '@reduxjs/toolkit';
import searchReducers from 'redux/reducers/searchReducers';

const searchInitialState: ISearchState = {
  filters: {},
  isOpenMobileFilter: false
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: searchReducers
});

export default searchSlice;
