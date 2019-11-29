import React, {Component} from 'react';
import './Motivators.css'

export default class Motivators extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="motivators">
                <div className="motivator_price">Price</div>
                <div className="motivator_dilevery">dilevery</div>
                <div className="motivator_payment">payment</div>
            </div>
        )
    }
}

