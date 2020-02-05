import React from 'react';


class Calc extends React.Component {
    constructor(props){
        super(props);

        this.state={
            display:'0'
            ,equation:''
        }

    }//constructor

numInput(e){
    if(this.state.equation.match(/[0-9\.]$/) && !this.state.equation.includes("=")){
        let val = this.state.equation + e.currentTarget.value;
        this.setState({
            equation: val
        })
    }
}

}

export default Calc;