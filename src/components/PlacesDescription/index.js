// Vendors
import React from 'react';
import { Card } from 'antd';
import { useSelector } from 'react-redux';

// Styles
import './style.scss';

const { Meta } = Card;

const PlacesDescription = () => {
  const { name, formatted_address, icon } = useSelector((state) => state.places.detail);
  return (
    <Card
      className="wrapper-place-description"
      hoverable
      style={{
        width: 240,
      }}
      cover={<img alt="example" src={icon} style={{ objectFit: 'none' }} />}
    >
      <Meta title={name} description={formatted_address} />
    </Card>
  );
};

export default PlacesDescription;
