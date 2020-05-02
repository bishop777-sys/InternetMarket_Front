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
import ProductList from '../ProductList/ProductList.jsx';
import ResponsiveDrawer from '../MainPanel/MainPanel.jsx';

//material UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
                            <ProductList />
                                </ResponsiveDrawer>
                            
                    </Container>
      
                </Fragment>
            </ErrorBoundry>
        );
    }
}

export default App;