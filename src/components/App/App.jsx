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
            <ErrorBoundry>
                <Fragment>
                    <Header />
                    <Container>
                        <ResponsiveDrawer>
                            <Router>
                                <Switch>
                                    <Route exact path="/" component={HomePage} />
                                    <Route exact path="/product" component={ProductList} />
                                </Switch>
                                

                            </Router>
                        </ResponsiveDrawer>
                    </Container>
                </Fragment>
            </ErrorBoundry>
        );
    }
}

export default App;