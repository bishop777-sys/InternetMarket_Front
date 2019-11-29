import React from "react";
import ReactDOM from 'react-dom';
import store from './store.jsx'
import {Provider} from 'react-redux'

import App from './components/App/App.jsx';

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById('root'));