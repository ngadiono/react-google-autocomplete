import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  detail: null,
};

export const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    placeList: (state, action) => {
      state.list = action.payload !== '' ? action.payload : initialState.list;
    },
    placeDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { placeList, placeDetail } = placesSlice.actions;

export default placesSlice.reducer;
