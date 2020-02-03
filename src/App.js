import React from 'react';
import './App.css';
import Carous from './components/carousel/index.js';
import Carousel  from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    

    <div className="box container">
      <h4 className="center">Aru's Calculator</h4>
      <br/>
      <div className="center" id="screen"> 0</div>
      <div  id="buttonBox" className='container row'>
        <a  value='AC' className= 'but' type="button" id="ac"><div className=" col-md-3" >AC </div></a>
      
        <a  value='CE' className= 'but' type="button" id="ce"><div className=" col-md-3" >CE</div></a>
        
        <a   value='/' className= 'but' type="button" id="/"><div className=" col-md-3">/</div></a>
          
        <a  value='*' className= 'but' type="button" id="*"><div className=" col-md-3" >x </div></a>
      
        <a  value='7' className= 'but' type="button" id="7"><div className=" col-md-3">7</div></a>
        
        <a  value='8' className= 'but' type="button" id="8"><div className=" col-md-3" >8</div></a>
        
        <a  value='9' className= 'but' type="button" id="9"><div className=" col-md-3" >9</div></a>
        
        <a  value='-' className= 'but' type="button" id="-"><div className=" col-md-3" >-</div></a>
        
        <a  value='4' className= 'but' type="button" id="4"><div className=" col-md-3" >4</div></a>
        
        <a  value='5' className= 'but' type="button" id="5"><div className=" col-md-3" >5</div></a>
        
        <a  value='6' className= 'but' type="button" id="6"><div className=" col-md-3" >6</div></a>
        
        <a  value='+' className= 'but' type="button" id="+"><div className=" col-md-3" >+</div></a>
        
        <a  value='1' className= 'but' type="button" id="1"><div className=" col-md-3" >1</div></a>
        
        <a  value='2' className= 'but' type="button" id="2"><div className=" col-md-3">2</div></a>
        
        <a  value='3' className= 'but' type="button" id="3"><div className=" col-md-3" >3</div></a>
        
        <a  value='.' className= 'but' type="button" id="."><div className=" col-md-3" >. </div></a>
      
        <a  value='0' className= 'but1' type="button" id="0"><div className=" col-md-4">0</div></a>
        
        <a  value='=' className= 'but1' type="button" id="equal"><div className=" col-md-7">=</div></a>
        
      </div>
    </div>
  );
}

export default App;
