import React, {Component} from 'react'
import './header.css';

class Header extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="header_main">
                <div className="header_content">
                    <div className="block1">При заказе от 100 рублей!</div>
                    <div className="next_block">></div>
                    <div className="block2">Бесплатная доставка без регистрации</div>
                    <div className="next_block">></div>
                    <div className="block3">Подробнее!</div>
                </div>
            </div>
        )
    }
}

export default Header;