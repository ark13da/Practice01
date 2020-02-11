import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';



class Calc extends React.Component {
    constructor(props){
        super(props);

        this.state={
            display:'0'
            ,equation:''
        }

        this.numInput= this.numInput.bind(this);
        this.dotInput=this.dotInput.bind(this);
        this.acPress=this.acPress.bind(this);
        this.minusPress=this.minusPress.bind(this);
        this.mOperatorPress=this.mOperatorPress.bind(this);
        this.zeroPress=this.zeroPress.bind(this);
        this.cePress=this.cePress.bind(this);
        this.calculate=this.calculate.bind(this);

        
        
    }// /constructor

numInput(e){
    if(this.state.equation.length==0){
        this.setState({
            equation: this.state.equation + e.currentTarget.value 
        });
    }else if (this.state.equation.match(/[0-9\.]|[+\-*\/]$/)){
        this.setState({
            equation: this.state.equation + e.currentTarget.value
        });
    }else if (this.state.equation.includes('=')){
        this.setState({
            equation: e.currentTarget.value,
            display: e.currentTarget.value
        });
    }
}

dotInput(e){
    if(this.state.equation.length==0){
        this.setState({
            equation: e.currentTarget.value,
            display: e.currentTarget.value
        });
    }else if (!this.state.equation.includes('=') && !this.state.equation.includes('.') ){
        this.setState({
            equation: this.state.equation + e.currentTarget.value
        });
    }else if (this.state.equation.includes('=')){
        this.setState({
            equation: e.currentTarget.value,
            display: e.currentTarget.value
        });
    }
}

acPress(){
    this.setState({
        equation: '',
        display: '0'
    });
}

minusPress(e){
    if (!this.state.equation.includes('=')){
        if(this.state.equation.length==0 || !this.state.equation.match(/[+\-*\/\.]$/)){
            this.setState({
                equation: this.state.equation + e.currentTarget.value
            });
        }
    }else if (this.state.equation.includes('=')){
        this.setState({
            equation: e.currentTarget.value,
            display: e.currentTarget.value
        });
    }
}

mOperatorPress(e){
    if(!this.state.equation.includes('=')){
        if(!this.state.equation.length==0 && !this.state.equation.match(/[+\-*\/\.]$/)){
            this.setState({
                equation: this.state.equation + e.currentTarget.value
            });
        }
    }
}

zeroPress(e){
    if(!this.state.equation.includes('=')){
        if(!this.state.equation.length==0 && !this.state.equation.match(/[+\-*\/\.]$/)){
            this.setState({
                equation: this.state.equation + e.currentTarget.value
            });
        }
    }
}

cePress(){
    let postStr=this.state.equation.substring(0,this.state.equation.length - 1 )
    if(!this.state.equation.length==0){
        this.setState({
            equation: postStr
        });
    }
}

calculate(e){
    if(!this.state.equation.includes('=')){
        if(!this.state.equation.length==0 && this.state.equation.match(/[+\-*\/]/) && !this.state.equation.match(/[+\-*\/\.]$/)){
            this.setState({
                equation: this.state.equation + e.currentTarget.value
                ,display: eval(this.state.equation)
            });
        }
    }
}



render(){
    return(

    <div className="box container">
      <h4 className="center">Aru's Calculator</h4>
      <br/>
    <div className="center" id="screen">
        {this.state.equation}
        <br/>
        {this.state.display}
    </div>
      <div  id="buttonBox" className='container row'>
        <button  value='AC' className= 'but' type="button" id="ac" onClick={this.acPress}><div className=" col-md-3" >AC </div></button>
      
        <button  value='CE' className= 'but' type="button" id="ce" onClick={this.cePress}><div className=" col-md-3" >CE</div></button>
        
        <button   value='/' className= 'but' type="button" id="/" onClick={this.mOperatorPress}><div className=" col-md-3">/</div></button>
          
        <button  value='*' className= 'but' type="button" id="*" onClick={this.mOperatorPress}><div className=" col-md-3" >x </div></button>
      
        <button  value='7' className= 'but' type="button" id="7" onClick={this.numInput}><div className=" col-md-3">7</div></button>
        
        <button  value='8' className= 'but' type="button" id="8" onClick={this.numInput}><div className=" col-md-3" >8</div></button>
        
        <button  value='9' className= 'but' type="button" id="9" onClick={this.numInput}><div className=" col-md-3" >9</div></button>
        
        <button  value='-' className= 'but' type="button" id="-" onClick={this.minusPress}><div className=" col-md-3" >-</div></button>
        
        <button  value='4' className= 'but' type="button" id="4" onClick={this.numInput}><div className=" col-md-3" >4</div></button>
        
        <button  value='5' className= 'but' type="button" id="5" onClick={this.numInput}><div className=" col-md-3" >5</div></button>
        
        <button  value='6' className= 'but' type="button" id="6" onClick={this.numInput}><div className=" col-md-3" >6</div></button>
        
        <button  value='+' className= 'but' type="button" id="+" onClick={this.mOperatorPress}><div className=" col-md-3" >+</div></button>
        
        <button  value='1' className= 'but' type="button" id="1" onClick={this.numInput}><div className=" col-md-3" >1</div></button>
        
        <button  value='2' className= 'but' type="button" id="2" onClick={this.numInput}><div className=" col-md-3">2</div></button>
        
        <button  value='3' className= 'but' type="button" id="3" onClick={this.numInput}><div className=" col-md-3" >3</div></button>
        
        <button  value='.' className= 'but' type="button" id="." onClick={this.dotInput}><div className=" col-md-3" >. </div></button>
      
        <button  value='0' className= 'but1' type="button" id="0" onClick={this.zeroPress}><div className=" col-md-4">0</div></button>
        
        <button  value='=' className= 'but1' type="button" id="equal" onClick={this.calculate}><div className=" col-md-7">=</div></button>
        
      </div>
    </div>

    );
}

}

export default Calc;