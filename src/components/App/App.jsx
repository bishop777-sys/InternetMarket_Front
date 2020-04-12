import React, {Fragment, Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import PersonalArea from '../PersonalArea/PersonalArea.jsx';
import PopupRegion from '../PopupRegion/PopupRegion.jsx'
import Header from '../Header/Header.jsx'
import IconBreadcrumbs from '../BreadCrumbs/BreadCrumbs.jsx'
import Motivators from '../Motivators/Motivators.jsx'
import ErrorBoundry from '../error-boundry/error-boundry.jsx'

import './App.css'
import CardItem from '../CardItem/CardItem.jsx';

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
                    <IconBreadcrumbs />
                    <div className="body">
                        <Router>
                            <Switch>
                                <Route exact path="/">
                                    <Motivators />
                                </Route>
                                <Route path="/about">
                                    <PopupRegion />
                                </Route>
                                <Route path="/users">
                                    <PersonalArea />
                                </Route>
                                <Route path="/card/:id">
                                    <CardItem />
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