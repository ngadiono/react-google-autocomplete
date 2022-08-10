// Vendors
import React from 'react';
import { useLoadScript } from '@react-google-maps/api';

// Components
import Map from 'components/Map';
import Loader from 'components/Loader';

import './App.scss';

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries: ['places'],
  });

  if (!isLoaded) return <Loader />;
  return <Map />;
};

export default App;
