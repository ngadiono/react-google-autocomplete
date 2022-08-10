// Vendors
import React, { useState } from 'react';
import { List, Input } from 'antd';

// Hooks
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

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

  const handleSearch = (e) => {
    let searchText = e.target.value;
    setValue(searchText);
    // if (searchText === '') {
    //   console.log('peta membesar')
    // }
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

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
          dataSource={data}
          renderItem={(item) => (
            <List.Item onClick={() => handleSelect(item.description)}>{item.description}</List.Item>
          )}
        />
      )}
    </>
  );
};

export default PlacesAutocomplete;
