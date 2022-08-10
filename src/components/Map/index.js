// Vendors
import { useState, useMemo } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

// Components
import PlacesAutocomplete from 'components/PlacesAutocomplete';

// Styles
import './style.scss';

const Map = () => {
  const center = useMemo(() => ({ lat: -6.2614927, lng: 106.8105998 }), []);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} />
      </div>
      <GoogleMap
        zoom={selected !== null ? 13 : 2}
        center={selected !== null ? selected : center}
        mapContainerClassName="map-container"
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </>
  );
};

export default Map;
