import { combineReducers } from 'redux';
import userReducer from '../slices/userSlice';
import authModalReducer from '../slices/authModalSlice';
import moviesReducer from '../slices/movieSlice';
import menusReducer from '../slices/menusSlice';
import otpModalReducer from 'redux/slices/otpModalSlice';
import addUserModalReducer from 'redux/slices/addUserModalSlice';
import checkProcessReducer from 'redux/slices/checkProcessSlice';
import membersReducer from 'redux/slices/memberListSlice';
import searchSlice from '@/redux/slices/searchSlice';

const Reducers = combineReducers({
  movies: moviesReducer,
  authModal: authModalReducer,
  otpModal: otpModalReducer,
  addUserModal: addUserModalReducer,
  user: userReducer,
  menus: menusReducer,
  checkProcess: checkProcessReducer,
  members: membersReducer,
  search: searchSlice.reducer
});

export default Reducers;
