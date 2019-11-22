import React, {Fragment, Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import PopupRegion from '../PopupRegion/PopupRegion.jsx'
import Header from '../Header/Header.jsx'
import HeaderBar from '../HeaderBar/HeaderBar.jsx'
import Motivators from '../Motivators/Motivators.jsx'
import ErrorBoundry from '../error-boundry/error-boundry.jsx'

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
            <ErrorBoundry>
                <Fragment>
                    <Header />
                    <HeaderBar />
                    <div className="body">
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <Motivators />
                                </Route>
                                <Route path="/about">
                                    <PopupRegion />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </Fragment>
            </ErrorBoundry>
        );
    }
}

export default App;