import React from 'react';
import { Card } from 'antd';
import '../assets/css/style.css'; // Import your custom CSS for styling

const CardComponent = () => {
  return (
    <div className="card-container">
      <Card className="custom-card" title={<div className="custom-card-title">Develop dApp by updating components</div>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
};

export default CardComponent;
