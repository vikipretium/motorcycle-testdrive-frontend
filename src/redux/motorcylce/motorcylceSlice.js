import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  motorcycles: [],
  isLoading: false,
  error: false,
};

export const fetchMotorcycles = createAsyncThunk(
  'motorcycle/fetchMotorcycles',
  async (_nill, { rejectWithValue }) => {
    const retrieveMotorcycleAPI = 'http://localhost:3000/api/v1/motorcycles';
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
      const response = await fetch(retrieveMotorcycleAPI, requestOptions);
      const data = await response.json();
      return data.data;
    } catch (err) {
      return rejectWithValue('Failed to obtain data from API');
    }
  },
);

const motorcycleSlice = createSlice({
  name: 'motorcycle',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMotorcycles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMotorcycles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.motorcycles = action.payload;
    });
    builder.addCase(fetchMotorcycles.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default motorcycleSlice.reducer;
