// secret settings with .env
require('dotenv').config()

// Redux store and high order components
import store from './store';
import { Provider } from 'react-redux';

// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// Styles
import './index.css';

// Components
import BaseContainer from './containers/BaseContainer';
import DetailsContainer from './containers/DetailsContainer';
import About from './components/About';


ReactDOM.render(
    <Provider store={ store } >
        <Router history={ hashHistory } >
            <Route path="/" component={ BaseContainer } >
                <Route path=":place" component={ DetailsContainer } />
                <Route path="about" component={ About } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
