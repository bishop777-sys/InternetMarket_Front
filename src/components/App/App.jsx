import React, {Fragment, Component } from 'react'
import {Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from '../Header/Header.jsx'
import ErrorBoundry from '../error-boundry/error-boundry.jsx'
import './App.css'
import ProductList from '../ProductList/ProductList.jsx';
import ResponsiveDrawer from '../MainPanel/MainPanel.jsx';
import HomePage from '../HomePage/HomePage.jsx';
import IconBreadcrumbs from '../BreadCrumbs/BreadCrumbs.jsx';
import { Container } from '@material-ui/core';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            show: false
        }
        
    }
    render() {
        return (
            <Router>
                <ErrorBoundry>
                    <Fragment>
                        <Header />
                        <Container>
                            <ResponsiveDrawer>
                                <Switch>
                                    <Route exact path="/" component={HomePage} />
                                    <Route exact path="/product/:id" component={ProductList} />
                                </Switch>
                            </ResponsiveDrawer>
                        </Container>
                    </Fragment>
                </ErrorBoundry>
            </Router>
        );
    }
}

export default App;