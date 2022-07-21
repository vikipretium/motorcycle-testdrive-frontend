import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import motorcycleReducer from './motorcylce/motorcylceSlice';

export default configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
  },
  // Middleware to show Redux Transactions: Please remove when we push to production
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
