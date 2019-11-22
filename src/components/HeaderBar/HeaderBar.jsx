import React, {Component, Fragment} from 'react';
import HeaderBottom from '../HeaderBottom/HeaderBottom.jsx'
import './Header.css'

class HeaderBar extends Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <Fragment>
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
                <HeaderBottom />
            </Fragment>
        )
    }

}

export default HeaderBar;