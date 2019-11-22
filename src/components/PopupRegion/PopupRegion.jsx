import React, {Component} from 'react';
import './PopupRegion.css'
import { runInThisContext } from 'vm';

class PopupRegion extends Component{
    constructor(props){
        super(props);
        this.state = {
            cityName: ""
        }
        this.showPosition = this.showPosition.bind(this);
    }
    async componentDidMount(){
        //navigator.geolocation.getCurrentPosition(this.showPosition)
        const cityName = await fetch('http://ip-api.com/json');
        const json = await cityName.json();
        this.setState({
            cityName : json.city
        })
    }
    showPosition(position){
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }


    render(){
        return(
            <div className="region_popup_box">
                <div className="arrow_block" />
                <div className="region_popup">
                    
                    <p>Ваш город {this.state.cityName}?</p>
                    <div className="buttons">
                        <div className="btn_yes">
                            <button className="region_aggre">Да</button>
                        </div>
                        <div className="btn_no">
                            <button className="region_aggre">Нет</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default PopupRegion;