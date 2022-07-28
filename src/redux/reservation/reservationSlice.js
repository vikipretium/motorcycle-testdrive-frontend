/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../config';

const initialState = {
  reservations: [],
  isLoading: false,
  error: false,
};

export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async (userId, { rejectWithValue }) => {
    const retrieveReservationsAPI = `${API_BASE_URL}/users/${userId}/reservations`;
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        // Needs to be filled with Auth Header from sign in request
        // Authorization: `Bearer ${process.env.REACT_APP_CARBON_API_KEY}`,
      },
      mode: 'cors',
      cache: 'default',
    };
    try {
      const response = await fetch(retrieveReservationsAPI, requestOptions);
      const data = await response.json();
      return data.data;
    } catch (err) {
      return rejectWithValue('Failed to obtain data from API');
    }
  },
);

export const deleteReservation = createAsyncThunk(
  'reservations/deleteReservations',
  async ({ reservationId, userId }, { rejectWithValue }) => {
    const deleteReservationsAPI = `${API_BASE_URL}/users/${userId}/reservations/${reservationId}`;
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        // Needs to be filled with Auth Header from sign in request
        // Authorization: `Bearer ${process.env.REACT_APP_CARBON_API_KEY}`,
      },
      mode: 'cors',
      cache: 'default',
    };
    try {
      await fetch(deleteReservationsAPI, requestOptions);
      return reservationId;
    } catch (err) {
      return rejectWithValue('Failed to post data from API');
    }
  },
);

export const addReservation = createAsyncThunk(
  'reservations/addReservations',
  async ({ reservationBody, userId }, { rejectWithValue }) => {
    const addReservationsAPI = `${API_BASE_URL}/users/${userId}/reservations`;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Needs to be filled with Auth Header from sign in request
        // Authorization: `Bearer ${process.env.REACT_APP_CARBON_API_KEY}`,
      },
      body: JSON.stringify(reservationBody),
      mode: 'cors',
      cache: 'default',
    };
    try {
      const response = await fetch(addReservationsAPI, requestOptions);
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue('Failed to post data to API');
    }
  },
);

const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchReservations.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReservations.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reservations = action.payload;
    });
    builder.addCase(fetchReservations.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteReservation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reservations = state.reservations.filter(
        (reservation) => reservation.id !== action.payload,
      );
    });
    builder.addCase(deleteReservation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(addReservation.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addReservation.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reservations.push(action.payload.data);
    });
    builder.addCase(addReservation.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default reservationSlice.reducer;
