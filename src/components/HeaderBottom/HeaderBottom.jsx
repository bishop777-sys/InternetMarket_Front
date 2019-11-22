import React, {Component} from 'react';
import './HeaderBottom.css'

class HeaderBottom extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="bottom">
                <div className="bottom_body">
                    <div className="phone">
                        <a href="tel:8908-316-88-51">8908-316-88-51</a>
                        <a href="8908-316-88-51">Круглосуточно 24/7</a>
                    </div>
                    <div className="mainMenu">
                        <ul>
                            <li>СПРАВКА</li>
                            <li>Акции</li>
                            <li>Обзоры</li>
                            <li>Оплата</li>
                            <li>Доставка</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderBottom;