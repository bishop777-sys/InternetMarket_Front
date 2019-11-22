import React, {Component} from 'react';


class HeaderBar extends Component{
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div>
                <div>LOGO</div>
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
        )
    }

}

export default HeaderBar;