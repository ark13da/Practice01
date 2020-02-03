import React from 'react';

class Carous extends React.Component{
    constructor (props){
        super(props);
        //state and objects goes here
        this.cities={
            HongKong:{link:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'
                        , name: 'Hong Kong'}
            ,singapore:{link: 'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'
                        ,name:'Singapore'}
            ,japan:{link:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp'
                    ,name:'Japan'}
        };
        // bind here
        this.cityParser=this.cityParser.bind(this);
    }
        //setstate here
        //method here
     
        cityParser (i){
            let Arr =[];
            for (let j=0; j<Object.keys(i).length; j++ ){
                Arr.push(<div><img src= {Object.values(i)[j].link} alt= {Object.values(i)[j].name} /><p className="legend">{Object.values(i)[j].name}</p></div>);
            }
            return(Arr);

        };

    render(){
        return(
        <div>{this.cityParser(this.cities)}</div>
        );
    }
}

export default Carous;

