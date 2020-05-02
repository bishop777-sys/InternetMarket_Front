import React, {Fragment, Component } from 'react'

import Header from '../Header/Header.jsx'
import ErrorBoundry from '../error-boundry/error-boundry.jsx'
import './App.css'
import ProductList from '../ProductList/ProductList.jsx';
import ResponsiveDrawer from '../MainPanel/MainPanel.jsx';
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
                                    <ProductList />
                        </ResponsiveDrawer>
                    </Container>
                </Fragment>
            </ErrorBoundry>
        );
    }
}

export default App;