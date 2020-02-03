import React from 'react';
import './App.css';
import Carous from './components/carousel/index.js';
//import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

let styles = {
  margin: 'auto',
  width: '500px'
};

function App() {
  return (
    <div style={styles}>
      <carousel>
        <Carous/>
      </carousel>
	  </div>
  );
}

export default App;
