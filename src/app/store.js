import { configureStore } from '@reduxjs/toolkit';
import calculatesSlice from './calculatesSlice';

export default configureStore({
  reducer: {
    calculatesSlice: calculatesSlice,
  }
});
