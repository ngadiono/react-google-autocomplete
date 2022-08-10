// Vendors
import React from 'react';
import { Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Styles
import './style.scss';

const { Title } = Typography;

const Loader = () => (
  <div className="loader-wrapper">
    <LoadingOutlined style={{ fontSize: 35, color: '#08c' }} />
    <Title level={3}>Loading...</Title>
  </div>
);

export default Loader;
