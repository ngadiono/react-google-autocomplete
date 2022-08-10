// Vendors
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Input } from 'antd';

// Hooks
import usePlacesAutocomplete, { getGeocode, getLatLng, getDetails } from 'use-places-autocomplete';

// Redux actions
import { placeList, placeDetail } from 'reducers/placesSlice';

// Styles
import './style.scss';

const PlacesAutocomplete = ({ setSelected }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const places = useSelector((state) => state.places.list);
  const detail = useSelector((state) => state.places.detail);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    let searchText = e.target.value;
    setValue(searchText);
  };

  const handleSelect = async (address) => {
    setValue(address.description, false);
    clearSuggestions();

    // Store detail of place
    getDetails({ placeId: address.place_id })
      .then((details) => {
        dispatch(placeDetail(details));
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    const results = await getGeocode({ address: address.description });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  useEffect(() => {
    dispatch(placeList(data));
  }, [data]);

  return (
    <>
      <Input.Search
        size="large"
        placeholder="Search Location..."
        value={value}
        onChange={(e) => handleSearch(e)}
        disabled={!ready}
      />
      {status === 'OK' && (
        <List
          size="small"
          bordered
          dataSource={places}
          renderItem={(item) => <List.Item onClick={() => handleSelect(item)}>{item.description}</List.Item>}
        />
      )}
    </>
  );
};

export default PlacesAutocomplete;
