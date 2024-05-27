import React from 'react';
import CurvedMenu from './components/Header';
import CardComponent from './components/Content';
import './App.css'
const App = () => {
  return (
    <div className='background-image-container'>
      <CurvedMenu />
      <CardComponent />
    </div>
  );
};

export default App;
