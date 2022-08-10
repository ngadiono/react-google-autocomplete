// Vendors
import React from 'react';
import { Card, Tag, Button } from 'antd';
import { useSelector } from 'react-redux';

// Styles
import './style.scss';

const { Meta } = Card;

const PlacesDescription = () => {
  const { name, formatted_address, icon, website } = useSelector((state) => state.places.detail);
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
      {website && (
        <a href={website} target="_blank">
          <Button type="primary" block style={{ marginTop: 20 }}>
            Website
          </Button>
        </a>
      )}
    </Card>
  );
};

export default PlacesDescription;
