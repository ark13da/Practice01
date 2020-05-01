import React from 'react';
import './App.css';
import Carous from './components/carousel/index.js';
import Carousel  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calc from './components/calculator/index.js';
import './components/calculator/calc.css';

let styles = {
  margin: 'auto',
  width: '500px'
};

function App() {
  return (
    // carousel
    /* 
    <div style={styles}>
      <carousel>
        <Carous/>
      </carousel>
    </div>
    */
   
    // calculator
    

    <div style={styles}>
      <Calc/>
    </div>
  );
}

export default App;
