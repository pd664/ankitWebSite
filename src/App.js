import React, { useState, useEffect } from 'react'
import './App.css';
import Body from './Body';
import ImageSlider from './carousel/ImageSlider';
import ImgData from './carousel/ImgData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <div className="app">
      <ImageSlider slides={ImgData} />
    </div>
  );
}

export default App;
