import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import motorcycleReducer from './motorcylce/motorcylceSlice';
import reservationReducer from './reservation/reservationSlice';

export default configureStore({
  reducer: {
    motorcycle: motorcycleReducer,
    reservation: reservationReducer,
  },
  // Middleware to show Redux Transactions: Please remove when we push to production
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
