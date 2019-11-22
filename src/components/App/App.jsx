import React, { Component } from 'react'
import PopupRegion from '../PopupRegion/PopupRegion.jsx'
import Header from '../Header/Header.jsx'
import HeaderBar from '../HeaderBar/HeaderBar.jsx'
import './App.css'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
    }
    render() {
        return (
            <div>
                <Header />
                <HeaderBar />

                {this.state.show  &&
                    <PopupRegion />
                }
            </div>
        );
    }
}

export default App;