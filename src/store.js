// Vendors
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import placesReducer from 'reducers/placesSlice';

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
});
