import React, {Component} from 'react';
import './Header.css'

class HeaderBar extends Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div className="float_header">
                <div className="left">
                    <a href="/" className="logo"/>
                </div>
                <div className="right">
                    <div>
                        <input type="text" />
                        <button>Search</button>
                    </div>
                    <div>
                        User room
                    </div>
                    <div>
                        Geolocation
                    </div>
                    <div>
                        BAG
                    </div>
                </div>
                
            </div>
        )
    }

}

export default HeaderBar;